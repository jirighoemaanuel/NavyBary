const http = require('http');
const {readFileSync} = require('fs');

// reading our files
const homepage = readFileSync('./index.html', 'utf8');
const pageStyle = readFileSync('./public/style.css', 'utf8');

// const homepage = readFileSync('./index.html', 'utf8');
// const homepage = readFileSync('./index.html', 'utf8');


const server = http.createServer((req, res)=>{
    console.log(req.url)
    if (req.url === "/"){
        res.writeHead(200, {'content-type': 'text/html',})
        res.write(homepage);
        res.end()
    }else if (req.url === '/public/style.css'){
        res.writeHead(200, {'content-type': 'text/css',})
        res.write(pageStyle);
        res.end()
    }else {
        res.writeHead(200, {'content-type': 'text/plain',})
        res.write('Page does not exist');
        res.end()
    }
});

server.listen(5000);