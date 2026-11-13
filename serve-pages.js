const http = require('http');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath.startsWith('/kreative-hertz')) {
    reqPath = reqPath.slice('/kreative-hertz'.length);
  }
  if (!reqPath || reqPath === '/') {
    reqPath = '/index.html';
  } else if (!path.extname(reqPath)) {
    if (fs.existsSync(path.join(outDir, reqPath + '.html'))) {
      reqPath = reqPath + '.html';
    } else if (fs.existsSync(path.join(outDir, reqPath, 'index.html'))) {
      reqPath = path.join(reqPath, 'index.html');
    }
  }

  const filePath = path.join(outDir, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found: ' + req.url);
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/kreative-hertz/');
});

