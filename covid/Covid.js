const cheerio = require('cheerio');
const request = require('request');

String.prototype.toNumber = function(){
    return parseInt(this.split("").filter(x => x != " " && x != ",").join(""));
}

function getCovidData() {
    const url = "http://ncov.mohw.go.kr/bdBoardList_Real.do";

    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            request(url, (err, res, body)=>{
                const $ = cheerio.load(body);
        
                let total = $(".ca_value").eq(0).html().toNumber();
                let covid = $(".inner_value").eq(0).html().toNumber();
                let covid_d = $(".inner_value").eq(1).html().toNumber();
                let covid_o = $(".inner_value").eq(2).html().toNumber();
                
                let freeCnt = $(".ca_value").eq(2).html().toNumber();
                let freeCnt_compare = $(".txt_ntc").eq(0).html().toNumber();
            
                let inPrison = $(".ca_value").eq(4).html().toNumber();
                let inPrison_compare = $(".txt_ntc").eq(1).html().toNumber();
            
                let death = $(".ca_value").eq(6).html().toNumber();
                let death_compare = $(".txt_ntc").eq(2).html().toNumber();
                
                let date = $(".t_date").eq(0).html();
                date = date.split("0").filter(x => x != "(" && x != " ");
                let subDate = date[0];
                subDate = subDate.split(".").filter(x => x != " ");
                subDate[0] = subDate[0].slice(1,3);
                let year;
                if (subDate[0] == 12 && subDate[1] == 31) {
                    year = 2020;
                } else {
                    year = new Date().getFullYear();
                }
                subDate.unshift(year);

                let FDate = `${subDate[0]}-${subDate[1]}-${subDate[2]}`;

                resolve({total,covid,covid_d,covid_o,freeCnt,freeCnt_compare,inPrison,inPrison_compare,death,death_compare, FDate});
            });
        }, 3000);
    });
}

// getCovidData().then(x => {
//     console.log(x);
// });

module.exports.getCovidData = getCovidData;