String.prototype.zero = function(){
    return this.substring(this.length - 2);
}

window.onload = function(){
    const h = $(".h"); //각 시,분 초를 나타내는 dom을 가져온다. 가져온 돔은 제이쿼리 객체다.
    const m = $(".m");
    const s = $(".s");
    const total = $(".total");

    let timeLabel = [h, m, s];

    let startTF = true;
    let time;
    let timerId;

    $("#start").on("click", e => {
        time = h.text() * 3600 + m.text() * 60 + s.text() * 1;
        if (!startTF) {
            clearInterval(timerId);
            $("#start").css({backgroundColor: "#dac3f7"});
            console.log("일시정지");
        } else {
            // timerId = setInterval(run, 1000); 
            timerId = setInterval(()=>{
                time--;
        
                let hour = "00" + Math.floor(time / 3600); //시간을 구한다.
                let min = "00" + Math.floor((time - hour * 3600) / 60); //분을 구한다.
                let sec = "00" + time % 60;
        
                h.text(hour.zero());
                m.text(min.zero());
                s.text(sec.zero());
                total.text(`${h.text()} : ${m.text()} : ${s.text()}`);
                //자릿수가 한자리 일때도 앞에 0이 붙어서 나오도록 변경해라.
                if(time <= 0){
                    clearInterval(timerId); //시간이 0이되면 타이머를 멈춘다.
                }
                console.log(startTF);
            }, 1000);

            $("#start").css({backgroundColor: "rgb(210, 136, 224)"});
            console.log("시작");
        }
        startTF = !startTF;
    });

    const spins = $(".spin"); //3개의 스핀을 가져온다.
    let ends = [23, 59, 59];
    for(let i = 0; i < 3; i++){
        fillNumber(spins.eq(i), ends[i]);
    }

    function fillNumber(target, endNumber){
        target.empty(); //타겟내에 있는거 지우고
        target.append(`<div class="block">--</div><div class="block">--</div>`);
        for(let i = 0; i <= endNumber; i++){
            target.append(`<div class="block">${ (i + "").zero() }</div>`);
        }
        target.append(`<div class="block">--</div><div class="block">--</div>`);
    }

    let isDrag = false;
    let target = undefined;
    let startY = undefined;

    let max = [-920, -2320, -2320];
    $(".spin").on("mousedown", e => {
        isDrag = true;
        // console.log(e.currentTarget);
        target = e.currentTarget;
        startY = e.pageY;
    });

    $(".spin").on("mousemove", function(e) {
        if (!isDrag) return;

        let delta = (startY - e.pageY) / 10;

        let top = parseInt( $(target).css("top") );
        top -= delta;
        if (top  > 0) top = 0;
        if (top < max[$(this).index()]) top = max[$(this).index()];

        $(target).css({top: `${top}px`});
        start = e.offsetY;
    });

    $("#popup").on("mouseup", e => {
        isDrag = false;
        let top = parseInt( $(target).css("top") );
        top = Math.floor(top / 40) * 40;
        // 23 * 40 = 920
        $(target).stop().animate({top: `${top}px`}, 300);
    });

    $("#saveBtn").on("click", e => {
        let text = "";
        $(".spin").each( (idx, item) => {
            let top = parseInt($(item).css("top"));
            top = Math.abs(top / 40);
            timeLabel[idx].html( ("00" + top).zero() );
            text += ("00" + top).zero();
            total.text(text);
        });
        $("#popup").fadeOut(500);
    });
}

// 자바스크립트 클래스는 String Array Number 

// 얘들은 기능을 가지고 있겠네?
// String.prototype.a

// A라는 클래스에 b라는 매서드를 만들었어
// A의 인스턴스에서는 전부 b라는 매서드를 실행할 수 있겠지?
// 멤버변수 == 인스턴스 <= 준영아?

// Scanner in = new Scanner(System.in);
// in.nextInt()

// 프로토타입에 변수 선언 가능할까?