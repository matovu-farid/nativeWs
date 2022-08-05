const socket = io('http://localhost:8000')
  const form = document.getElementById('message-form')
  form.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log('message submitted')
    const textInput = document.getElementById('user-message')
    const message = textInput.value;
    socket.emit('ChatFormClient',message)
  })
  socket.on('ChatFromServer',(msg)=>{
    console.log(msg)
    const list = document.getElementById('messages');
    const listItem = document.createElement('li');
    listItem.innerText = msg;
    list.appendChild(listItem);

  })