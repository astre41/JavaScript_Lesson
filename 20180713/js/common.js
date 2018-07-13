var fruits = ['リンゴ', 'バナナ', 'パイナップル', 'ブドウ', 'スイカ', 'メロン'];
console.log(fruits, fruits.length)

var fruits2 = ['ミカン', 'マンゴー'];

//配列を連結する
console.log(fruits.concat(fruits2))

//文字列として繋げる
var date = [2018, 7, 13]
console.log(date, date.join('/'))

//配列の追加
var fruits3 = ['バナナ']
console.log(fruits3)
fruits3.push('ブドウ') //後ろに追加
console.log(fruits3)
fruits3.unshift('ミカン') //前に追加
console.log(fruits3)

// 配列の削除
fruits3.shift() //前から削除
console.log(fruits3)
fruits3.pop() //後ろから削除
console.log(fruits3)

// 削除と追加（入れ替える）
fruits.splice(2, 3, 'ミカン', 'ミカン', 'ミカン')
console.log(fruits)

// 配列を取り出す
var animal = ['猫', '犬', '兎', '鼠', '虎']
console.log(animal.slice(1, 3))
console.log(animal.slice(animal.length - 2, animal.length)) //配列の後ろから2つを取ってくる

//並べ替え
var num = [3, 1, 2, 5]
console.log(num.sort())

// 配列の逆順
console.log(num.reverse())

//区切り文字を指定して文字列から配列に変換
var dateString = '2018/7/13'
console.log(dateString.split('/'))
