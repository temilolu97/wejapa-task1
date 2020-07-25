const http = require('http')
const port =5000
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Hello world, welcome to Wejapa Internships')
})

server.listen(port,'127.0.0.1')
console.log(`Server running on http://127.0.0.1:${port}`)
