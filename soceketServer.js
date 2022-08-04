const { createServer } = require("http");
const { Server } = require("socket.io");

const server = createServer((req,res)=>{
  res.end('I am connected')
});
const io = new Server(server,{
  // cors: {
  //   origin: "http://127.0.0.1:5500",
  //   methods: ["GET","POST"]
    
  // }
})
io.on("connection",(socket)=>{
  socket.emit('Welcome','Welcome to the web socket server!!!')
  socket.on('message',(msg)=>{
    console.log(msg)
  })
})
server.listen(8000);