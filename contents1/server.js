const express = require('express');
const http = require('http');
const path = require('path');

// app이 express로 만들어진 애
const app = new express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
const session = require('express-session');

// app에 view파일(index.html)찾는 곳을 디렉토리 views라는 폴더에서 찾을 것
// view engine은 ejs쓰겠다라는 것을 세팅, express에 옵션 세팅
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// public폴더로 가서 정적인 파일들은 다 여기에 있다라고 지정해주는 것
// 무조건 js, css들은 여기서 찾은
app.use( express.static(path.join(__dirname, 'public') ) );

// /로 들어오면
app.get('/', (req, res) => {
    res.render('main');
});

server.listen(54000, () => {
    console.log("서버가 54000포트에서 구동중입니다.")
})