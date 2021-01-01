const { rejects } = require("assert");

let data = "";

function getCovidData() {
    // 여기서 뭔가 시간이 걸리는 작업이 이뤄지는거야(비동기로)
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("Hello world");
        }, 3000);
    });
}

getCovidData().then(x => {
    console.log(x);
});
