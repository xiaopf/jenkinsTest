// const express = require('express');
// const app = express();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);


// io.on('connection', function (socket) {
//     console.log('a user connected');
//     socket.on('sendmsg',function(data){
//         console.log(data)
        
//     })

//     setTimeout(() => {
//         io.emit('recvmsg', { msg: "我是后台发来的消息" })
//     }, 5000);
// });


// http.listen(3031, function () {
//     console.log('listening on *:3031');
// });