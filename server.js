const http = require('http')

const hostname = '127.0.0.1'
const port = 5000

http.createServer((req, res) => {
    console.log(req.url)
    if(req.url === '/'){
        res.end('Home')
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Olá, rod!\n');
}).listen(port, hostname, () => console.log(`Servidor funcionando em ${hostname}:${port}`))