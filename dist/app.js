"use strict";
// function a(a: number, b: number): number {
//   let result = a + b;
//   return result;
// }
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('작동 확인');
    }
});
server.listen(3000, () => {
    console.log('http://localhost:3000');
});
//# sourceMappingURL=app.js.map