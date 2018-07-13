var fruits = ['みかん', 'ぶどう', 'ばなな', 'さくらんぼ']
console.log(fruits)
console.log(fruits[2])

var fruits2 = [
    ['りんご', 'さくらんぼ', 'いちご'], //赤い果物
    ['かき', 'みかん', 'びわ'], // オレンジ色果物
    ['バナナ', 'パイナップル', 'レモン'] //黄色い果物
]
console.log(fruits2)
console.log(fruits2[1])
console.log(fruits2[1][1])

var orange = (fruits2)
console.log(orange)
console.log(orange[1])


// object
var fruits3 = {
    red: ['りんご', 'さくらんぼ', 'いちご'], //赤い果物
    orange: ['かき', 'みかん', 'びわ'], // オレンジ色果物
    yellow: ['バナナ', 'パイナップル', 'レモン'] //黄色い果物
}

var fruits4 = {
    red: 'りんご',
    orange: 'みかん',
    yellow: 'ばなな'
}
console.log(fruits4.red)
console.log(fruits4['red'])
console.log(fruits3.yellow[1])

var color = 'orange'
console.log(fruits3[color])

//配列の長さを取ってくる
console.log(fruits.length)
for (var i = 0; i < fruits.length; i++) {
    console.log(i)
    console.log(fruits[i])
}

//配列に値を代入する
var colors = ['赤', '青', '黄']
console.log(colors)
colors[0] = '茶'
colors[3] = '紫'
console.log(colors)
//オブジェクトに値を代入する
var colors2 = {}
colors2.red = '赤'
console.log(colors2)

//Q1
for (var i = 1; i < 101; i++) {
    if (i % 2 === 0)
        console.log(i)
}
////Q2
for (var i = 1; i < 101; i++) {
    if (i >= 10 && i <= 30 || i >= 70 && i <= 90) {
        console.log(i)
    }
}

//Q3
for (var i = 1; i < 101; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}
//Q4
for (var i = 1900; i < 2101; i++) {
    if (i % 4 == 0 && i % 100 !== 0) {
        console.log(i)
    } else if (i % 400 === 0) {
        console.log(i)
    }
}
