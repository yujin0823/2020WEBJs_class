const data  = {
    name: '이유진',
    age: 18
};

module.exports.yujin = function (a, b) {
    return a + b;
}

// module.exports은 밖으로 보내지는 것
// module.exports = {
//     yu: yujin,
//     data:data
// };

// module.exports.yu = yujin;
module.exports.data = data;