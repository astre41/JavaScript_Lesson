//　Q1 配列に0〜50、50〜0の配列を入れてそれぞれ表示
var num1 = []

for (var i = 0; i < 51; i++) {
    num1.push(i)
}
console.log(num1)

var num2 = []

for (var i = 50; i > 0; i--) {
    num2.push(i)
}
console.log(num2)



// Q2 下記の果物が入った配列を一つづつ表示
var fruits = ['りんご', 'ばなな', 'ぱいなっぷる', 'ぶどう', 'すいか', 'めろん'];
console.log(fruits, fruits.join("\n"))



// Q3 下記の連想配列を、下記の結果になるように表示
var fruits = {
    red: ['りんご', 'さくらんぼ', 'いちご'],
    orange: ['かき', 'みかん', 'びわ'],
    yellow: ['バナナ', 'パイナップル', 'レモン']
};
for (fruit in fruits) {
    console.log(fruit);
    console.log(fruits[fruit])
}



// Q4 文字列’2013/4/26'を[年,月,日]のような配列に分割し、
//    配列の最後に[曜日,時間]を追加（[年,月,日,曜日,時間]）
var date = '2013/4/26'
var date = date.split('/')

date.push('金', '10:10')
console.log(date)



// Q5 0〜100の奇数・偶数をそれぞれ連想配列に分けて表示
var num = {
    odd: [],
    even: []
}

for (var i = 0; i < 101; i++) {
    if (i % 2 === 0) {
        num.odd.push(i)
    } else {
        num.even.push(i)
    }
}

num.odd.push(1)
num.even.push(2)

console.log(num)
