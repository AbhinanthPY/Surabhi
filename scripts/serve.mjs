import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL(process.argv.includes('--dist') ? '../dist/' : '../site/', import.meta.url));
const portIndex = process.argv.indexOf('--port');
const port = Number(portIndex < 0 ? 5173 : process.argv[portIndex+1]);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.woff2':'font/woff2','.ttf':'font/ttf','.json':'application/json','.txt':'text/plain; charset=utf-8','.xml':'application/xml'};
const server = http.createServer(async (request,response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url,'http://localhost').pathname);
    let file = path.resolve(root, '.'+pathname);
    if (file !== path.resolve(root) && !file.startsWith(root)) { response.writeHead(403); response.end(); return; }
    let status = 200;
    try {
      if ((await stat(file)).isDirectory()) file = path.join(file,'index.html');
      await stat(file);
    } catch { file=path.join(root,'404.html'); status=404; }
    const body = await readFile(file);
    response.writeHead(status,{'Content-Type':types[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});
    response.end(request.method==='HEAD' ? undefined : body);
  } catch { response.writeHead(400); response.end('Bad request'); }
});
server.listen(port,'127.0.0.1',()=>console.log(`Local: http://localhost:${port}`));
