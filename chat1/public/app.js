window.onload = function(){
    window.v = new Vue({
        el:"#chatApp",
        // load가 되었을 때는 created()
        mounted(){ // body에 append되는 순간 mounted난다.
            this.socket = new io(); // socket 연결
            // socket에 뭐가 들어오면 이런거 실행해라
            // user_list가 들어왔을 때 this.userList에 data를 넣어줌
            this.socket.on('user_list', data => this.userList = data);
            // login_ok가 들어왔을 때 isLogin을 true로
            // 그래서 팝입창이 사라진다
            this.socket.on('login_ok', data => this.isLogin = true);
            this.socket.on('req_msg', data => this.chatList.push(data));
        },
        data:{ // chatApp에서 사용되는 변수
            nickName:'',
            isLogin:false,
            socket:null,
            userList: [],
            textMsg: '',
            chatList: []
        },
        methods:{ // chatApp에서 사용되는 함수
            login(){
                // this.nickName이 공백이 아니라면 아래코드 실행
                if(this.nickName === "") return;
                // 서버로 login이 들어간다.
                // 서버입장에서는 login_ok를 보내, login_ok를 받았을 때 로그인 이루어지고
                // userList를 받았을 때 갱신
                this.socket.emit("login", this.nickName);
            },
            sendMsg() {
                // 여기서 서버로 데이터 전송하면 된다.
                if (this.textMsg === "") return;
                this.socket.emit("chat_msg", this.textMsg);
            }
        }
    })
}