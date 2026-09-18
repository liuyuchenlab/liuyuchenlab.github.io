---
name: dev-server-preview
description: Start a local static-file HTTP server for previewing a website and verify it is actually reachable before telling the user. Use when the user wants to preview a local site, or reports "service unavailable / cannot access localhost". Do not use for backend API servers or framework dev servers (Vite/Webpack/etc.).
---

# Dev Server Preview

Start a minimal Node.js static server for the workspace, then verify it is reachable with hard evidence (port listening + HTTP 200) before telling the user the URL.

## Why

Repeated failure mode: claiming "server is running" without checking the port or HTTP response. The user then reports the URL is dead. Always produce evidence.

## Steps

### 1. Locate the workspace root
Use the workspace folder the user is working in. Create a `server.js` there (or reuse an existing one) with this exact content — bind to `0.0.0.0`, not `localhost`, to avoid IPv4/IPv6 mismatch.

```js
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8765;
const ROOT = __dirname;
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";
  const filePath = path.join(ROOT, path.normalize(urlPath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403); res.end("Forbidden"); return;
  }
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); res.end("404: " + urlPath); return; }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Preview server running: http://localhost:${PORT} (PID: ${process.pid})`);
});
```

If `server.js` already exists, ensure it binds to `0.0.0.0` and reports the PID. Patch only the `listen` line if needed.

### 2. Check whether the port is already in use
```
netstat -ano | findstr :8765
```
- If a `LISTENING` line appears, note its PID. If it is an old orphaned preview server, kill it by PID only: `taskkill /PID <pid> /F`. Do not kill by process name (could hit unrelated Node processes).
- If nothing is listening, proceed.

### 3. Start the server in the background
```
node "<workspaceRoot>\server.js"
```
Use `run_in_background: true`. Record the background job ID.

### 4. Wait, then verify (hard evidence)
Wait 2 seconds, then run both checks:

1. Port listening:
   ```
   netstat -ano | findstr :8765
   ```
   Expect a `LISTENING` line on `0.0.0.0:8765`.

2. HTTP response:
   ```
   powershell -Command "try { $r = Invoke-WebRequest -Uri 'http://localhost:8765/index.html' -UseBasicParsing -TimeoutSec 5; 'Status: ' + $r.StatusCode + '; Length: ' + $r.Content.Length } catch { 'FAIL: ' + $_.Exception.Message }"
   ```
   Expect `Status: 200`.

### 5. Report to the user
Only tell the user the URL after both checks pass. Include the port and the evidence (status code). If either check fails, diagnose before reporting.

## If the server keeps dying
- Check the background job output log for a crash stack.
- Ensure `server.js` is inside the workspace root being served (it uses `__dirname` as root).
- Verify the workspace actually contains an `index.html`.

## Common gotchas
- **IPv6/IPv4 mismatch**: `localhost` may resolve to `::1` while the server only listens on `127.0.0.1`. Binding to `0.0.0.0` avoids this.
- **PowerShell `&&` not supported**: chain commands with `;` instead.
- **PowerShell profile errors** (`UnauthorizedAccess`) are noise — they do not mean the command failed. Read the actual command output below them.
- **Do not claim the server is up** until `netstat` shows `LISTENING` and the HTTP probe returns 200.
