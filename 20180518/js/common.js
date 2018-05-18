/*
String：文字列(シングルコーテーション)
Number：数値
Boolean：trueとfalseなど
*/
var test = 'テスト';
console.log(test, typeof test);

var num = 1;
console.log(num, typeof num);

var num2 = '2';
console.log(num2, typeof num2);

var bool = true;
console.log(bool, typeof bool);
console.log(false, typeof false);

//比較演算子
console.log(1 === 1);
console.log(1 !== 1);
console.log(1 > 2);
console.log(1 < 2);
console.log(1 >= 1);
console.log(1 <= 1);

//論理演算子 &,orのような
var num = 10;
console.log(num > 5 && num < 20);

var num2 = Math.floor(Math.random() * 10); //ランダムに0から9までの数を入れる
console.log(num2, num2 === 5 || num2 === 3); //その数字と比較して5もしくは3だった数字だった場合true
