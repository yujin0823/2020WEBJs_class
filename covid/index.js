const {getCovidData} = require('./Covid');
const express = require('express'); // 지금 설치한 express를 가져온다.
// 프로그램 파일즈에서 가져온다.
const http = require('http');
const path = require('path');

// 익스프레스를 이용하여 웹서버 만들기
const app = express();
const server = http.createServer(app);

let data = undefined;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 정적 파일은 public 폴더를 참고하도록 코드를 작성한다.
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    console.time("render");
    if (data === undefined) {
        getCovidData().then(d => {
            // 가져온 데이터를 갱신
            res.render('main', d);
            // 여기에서 db에 넣는 거
            

            // 데이터에 d를 넣어주고
            data = d;
            console.timeEnd("render");
        });
    } else {
        res.render('main', data);
        console.timeEnd("render");
    }
    
})

server.listen(54000, () => {
    console.log("서버가 54000번 포트에서 동작중입니다.");
})