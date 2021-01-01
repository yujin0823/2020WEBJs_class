class App {
    constructor() { // 생성자
        this.listDom = document.querySelector("#list");
        this.todoList = []; // 작업들을 저장하는 배열
        this.titleInput = document.querySelector("#title");
        this.contentInput = document.querySelector("#content");
        this.garbage = document.querySelector("#garbage");
        this.msgBox = document.querySelector(".msg-box");

        this.idx = 0;

        this.init(); // 자기의 매서드인 init을 실행하는 거
    }

    init() { // 초기화
        this.listDom.innerHTML = "";

        // console.log(this);
        // console.log(this.titleInput, this.contentInput);
        
        document.querySelector("#addBtn").addEventListener("click", this.addTodo);
        // document.querySelector("#addBtn").addEventListener("click", this.addTodo.bind(this));
        // 위에 코드 실행한 이유 -> 나를 호출한 녀석에 this
        // init의 this는 app이고 addTodo의 this는 addBtn이다.

        // dragover했을 때 preventDefault 기본 동작 중단
        this.garbage.addEventListener("dragover", e => e.preventDefault());
        // garbage에 drop햇을 때
        this.garbage.addEventListener("drop", e => {
            const idx = e.dataTransfer.getData("idx") * 1;
            console.log(idx);
            // todoList에서 list에 있는 idx랑 받아온 이벤트가 실행되고 있는 idx가 같은 것을 찾아와
            const target = this.todoList.find(x => x.idx === idx);
            console.log(target);

            // 숙제1. 현재 Dom은 지워지지만 todoList에서는 여전히 해당 아이템이 남아있다.
            // 따라서 todoList에서 지워지도록 하는 코드를 이곳에 작성.
            // array splice를 활용하면 됩니다. 다른 걸 써도 가능
            this.todoList = this.todoList.filter( data => data.idx != idx );

            target.dom.classList.add("off");
            setTimeout( () => {
                this.showToast("글 삭제가 완료되었습니다.");
                target.dom.remove();
            }, 1000)

            // 숙제2. 삭제될 때 뿐 아니라 나타날 때도 애니메이션 되서 나타나도록 만들어라
        });
    }

    // 이벤트리스너용 메서드는 반드시 화살표함수로 지정해야 this바인딩에 문제가 없다.
    addTodo = () => {
        // console.log(this);
        const title = this.titleInput.value;
        const content = this.contentInput.value;
        console.log(title, content);

        // 1. 여기서 title === "" 또는 content === "" 이면 얼럿
        if (title === "" || content === "") {
            alert('공백이 있습니다!');
            return;
        } 

        // ++후증가, this.idx++은 증가히기 전의 값이 들어가고
        // ++this.idx은 증가시키고 idx에 들어간다.
        const idx = ++this.idx;
        // Dom을 만들어서 listDom의 자식으로 넣어준다.
        const dom = this.makeTodoDom( {idx, title, content} );
        // drag가 시작되었을 때 "idx"라는 변수의 현재 idx를 넣어준다.
        // drag가 된 순간 몇 번째 item인지에 대한 idx가 dataTransfer에 세팅
        dom.addEventListener("dragstart", e => {
            e.dataTransfer.setData("idx", idx);
        });

        this.todoList.push( {idx, title, content, dom} );
        // console.log(this.makeTodoDom());
        this.listDom.appendChild(dom);
        
        dom.classList.add("item");
        dom.classList.add("on");
        setTimeout( () => {
            dom.classList.add("on2");
        }, 300)

        // 2. 여기서 삽입이 된 후에는 
        // titleInput과 contentInput에 입력한 내용 사라지게
        this.titleInput.value = "";
        this.contentInput.value = "";
        this.showToast("글 작성이 완료되었습니다.");
    }

    makeTodoDom( {idx, title, content} ) {
        // div를 하나 만들고
        let div = document.createElement("div");
        // draggable : 드래그 할 수 있다.
        div.innerHTML = 
            `<div class="item" data-idx="${idx}" draggable="true">
                <h4 class="title">${title}</h4>
                <span class="msg">${content}</span>
            </div>`;
        return div.firstChild;
    }

    // 메시지 박스
    showToast(msg) {
        this.msgBox.innerHTML = msg;
        this.msgBox.classList.add("on");
        // 2초 뒤 메시지 박스 사라진다.
        setTimeout( () => {
            this.msgBox.classList.remove("on");
        }, 2000)
    }
}

window.onload = function() {
    window.app = new App();
};