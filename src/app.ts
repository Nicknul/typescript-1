function a(a: number, b: number): number {
  let result = a + b;
  return result;
}

import http from 'http';

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('작동 확인');
  }
});

server.listen(3000, () => {
  console.log('http://localhost:3000');
});
