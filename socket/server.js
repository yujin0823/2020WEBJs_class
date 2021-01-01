const express = require("express");
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);//소켓 담당

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('main');
});

io.on('connection', socket =>{
    console.log("유저 연결");
    console.log(socket.id);
    socket.on('send-msg', data=>{
        io.emit('server-msg', data);
    });
});

server.listen(54000, ()=>{
    console.log('express 서버가 54000포트에서 구동중입니다.');
});