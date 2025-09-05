const http = require('http');
const server = http.createServer((req,res)=>{
    // console.log(req);
    res.setHeader('content-Type','text/html');
    res.write('<html><head> server coding</head><body><h1>hello server</h1></body></html>');
    res.end();
    // process.exit();
    // this will automatically close the server after 1 call
});

const PORT = 3001;
server.listen(PORT,()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
})