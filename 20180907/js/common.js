var colors = ['赤', '青', '黄色', '緑']
console.log(colors[1]);

var users = [

    {
        name: 'わたなべ',
        age: 18

},
    {
        name: 'せんぱい',
        age: 25
    },
    {
        name: 'あべくん',
        age: 18
    }
]

// あべくんの年齢
console.log(users[2]['age']);



// 配列の長さを調べる
console.log('colors配列の長さは' + colors.length)



// 配列を結合する
var fruits = ['みかん', 'ばなな']
var fruits2 = ['ぱいなっぷる', 'ぶどう']
var fruits3 = ['りんご', 'すいか']

console.log(fruits.concat(fruits2, fruits3));


// 配列の追加
var animal = ['うさぎ', 'ねこ']

animal.unshift('うし') //配列の最初に追加
console.log(animal)

animal.push('いぬ')
console.log(animal)

var nums = [] // 予めからの配列を用意して後から値を入れる
nums.push(1)
nums.push(2)
nums.push(3)
console.log(nums)


// 配列の削除
var sports = ['野球', 'バスケ', 'サッカー']

sports.shift() // 配列の最初を削除
console.log(sports)

sports.pop() // 配列の最後を削除
console.log(sports)


// 配列の差し替え
console.log(fruits)
fruits.splice(1, 2, '追加したい値', '追加したい値2');
console.log(fruits)

// 配列の取り出し
var song = ['演歌', 'ジャズ', 'JPOP']
console.log(song.slice(1, 3))
console.log(song.slice(1)) // 2つ目を省略すると最後まで


// 配列のソート
var sortNums = [3, 4, 2, 6, 9, 1]
sortNums.sort()
console.log(sortNums)


// 配列の逆順
sortNums.reverse()
console.log(sortNums)


// 文字列を区切り文字で配列に変換
var date = '2013, 4, 26';
console.log(date.split('/'))
