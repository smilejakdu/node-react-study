const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.end('hello world');
});
server.listen(3065, () => {
    console.log('server running')
});