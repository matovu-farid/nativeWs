const express = require('express');
const app = express();
const socketio = require('socket.io')


app.use(express.static(__dirname + '/public'))
const expressServer = app.listen(8000)
const io = socketio(expressServer)
io.on('connection',(socket)=>{
  // socket.emit('messageFromServer',{data: "Welcome to the socketio server"})
  socket.on('messageToServer',(dataFromClient)=>{
    // console.log(dataFromClient)

  })
  socket.on('ChatFormClient',(msg)=>{
    console.log('Chat Form client',msg)
    
    io.emit('ChatFromServer',msg)
  })
  
})