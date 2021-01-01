window.onload = function(){
    const socket = io(); //서버에 소켓연결

    const popup = document.querySelector("#popup");
    const nicknameInput = document.querySelector("#nickname");
    document.querySelector("#btnLogin").addEventListener("click", e =>{
        if(nicknameInput.value === ""){
            alert("닉네임 입력하세요");
            return;
        }
        socket.emit('login', nicknameInput.value);
    });

    document.querySelector("#nickname").addEventListener("keydown", e => {
        if (window.event.keyCode == 13) {
            if (nicknameInput.value === "") {
                alert("닉네임 입력하세요");
                return;
            }
            socket.emit('login', nicknameInput.value);
        }
    });

    socket.on('login-ok', data=>{
        popup.remove();
    });

    const userList = document.querySelector("#userList");
    socket.on('user-list', data =>{
        userList.innerHTML = "";
        data.forEach( user => {
            let div = document.createElement("div");
            div.classList.add("user");
            div.innerHTML = user.nickname;
            if(user.id === socket.id){
                div.classList.add("my");
            }
            userList.appendChild(div);
        });
    });

    const msgBox = document.querySelector("#msgBox");
    const msgInput = document.querySelector("#msg");
    const ifno = document.querySelector("#info");
    const name = document.querySelector(".name");
    msgBox.innerHTML = "";

    // 보내기 버튼 클릭시
    document.querySelector("#btnSend").addEventListener("click", e => {
        if (msgInput.value !== "") {
            socket.emit('chat msg', msgInput.value);
            msgInput.value = "";
        }
    });

    document.querySelector("#msg").addEventListener("keydown", e => {
        if (window.event.keyCode == 13 && msgInput.value !== "") {
            socket.emit('chat msg', msgInput.value);
            msgInput.value = "";
        }
    });

    socket.on('awesome', data => {
        let msg = document.createElement("div");
        msg.classList.add("msg");
        if (data.user.id === socket.id) {
            msg.classList.add("my");
            msg.innerHTML = data.msg;
        } else {
            name.innerHTML = data.user.nickname;
            msg.innerHTML = data.user.nickname + " : " + data.msg;
        }
        ifno.appendChild(name);
        msgBox.appendChild(msg);
        msgBox.scrollTop = msgBox.scrollHeight;
    });

    // 1. 디자인을 고쳐보세요.
    // 2. 채팅 메시지를 치면 자동으로 스크롤 되게 하세요.
    // 3. 로그인과 채팅 메시지 전송에서 엔터키를 치면 자동 전송되게
};