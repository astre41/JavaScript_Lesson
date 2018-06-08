var num = 2;

//if(条件){処理}
if (num === 10) {
    console.log('num変数は10だよ!')
} else if (num === 5) {
    console.log('num変数は5だよ!')
} else if (num === 1) {
    console.log('num変数は1だよ!')
} else {
    console.log('それ以外の数字')
};

//ランダムに生成した0〜9までの数字をrandomNum変数に入れる
var randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);

//条件 3以上 かつ 8以下の場合にtrueとする条件
if (randomNum >= 3 & randomNum <= 8) {
    console.log(randomNum, 'この数字は3~8までの数字')
} else {
    console.log(randomNum, 'それ以外!')
}

console.log(randomNum % 2)
if (randomNum % 2 === 0) {
    console.log(randomNum, 'この数字は偶数です')
};
