var num = 100;
num = 20;
console.log(num);

//varの代わりのconst(再代入が出来ない)
const num2 = 10;
//num2 = 30;
console.log(num2)

const num3 = Math.floor(Math.random() * 10)
console.log(num3);

//奇数ですと表示する
if (num3 % 2 === 1) {
    console.log(num3, '奇数です')
};

//num3が奇数の場合は奇数です。
//偶数の場合は偶数。
var result = ''
if (num3 % 2 === 1) {
    console.log(num3, '奇数です')
    result = '奇数です'
} else if (num3 === 0) {
    console.log(num3, '0です')
    result = '零です❤️💙❤️'
} else　 {
    console.log(num3, '偶数です')
    result = '偶数です'
};

$('.box').html(num3 + 'は' + result);
