const http = require('http');
const { WebSocketServer } = require('ws');
const websocket = require('ws');
const server = http.createServer((req,res)=>{
  res.end("I am connected")
});
const wss = new WebSocketServer({server})
wss.on('headers',(headers,req)=>{
  console.log(headers)
})
server.listen(8000)


