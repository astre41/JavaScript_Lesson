// 0~1までのランダムな数字
console.log(Math.random());

// 小数点を切る
console.log(Math.floor(3.555));

// 0~9までのランダムな数字(少数あり)
console.log(Math.random() * 10);

// 1~10までのランダムな整数
console.log(Math.floor(Math.random() * 10) + 1);

// 配列の値をランダムで出す
var names = ['亀井', '渡邊', '安部']
console.log(names[Math.floor(Math.random() * names.length)])

// 繰り上げ
console.log(Math.ceil(3.1))

// 四捨五入
console.log(Math.round(3.1))
console.log(Math.round(3.5))

// 最小・最大 それぞれを取得する
console.log(Math.min(1, 2, 3, 4));
console.log(Math.max(1, 2, 3, 4));


// 最大値・最小値を決めたい
var randomNum = Math.floor(Math.random() * 100)
console.log(randomNum)
console.log(Math.min(randomNum, 50))
console.log(Math.max(randomNum, 50))


// Q1. 引数に数字を入れ実行すると、0から引数で渡した数字までの「奇数・偶数で分けた連想配列」を戻り値（return）で返す関数を作る

console.log(numObj(100));

function numObj(num) {
    var newObj = {
        odd: [],
        even: []
    }

    // 奇数偶数に分ける処理
    for (var i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            newObj.odd.push(i)
        } else {
            newObj.even.push(i)
        }
    }

    return newObj
}

// Q2 第1引数に配列、第2引数に文字列を渡すと、 第1引数の配列の最後に第2引数で渡した文字列を追加した配列を戻り値（return）で返す関数を作る


var fruits = ['りんご', 'めろん', 'ぶどう'];
console.log(addFruits(fruits, 'すいか'));


function addFruits(Obj1, Obj2) {
    Obj1.push(Obj2)

    return Obj1

}


// Q3 引数に数字を入れると、1からその引数までの乱数を戻り値（return）で返す関数を作る

console.log(randomNum2(10));

function randomNum2(num) {
    return Math.floor(Math.random() * num + 1)
}


// Q4 引数に(min, max)のような 2つ数字を入れ、minからmaxまでの整数の乱数を戻り値（return）で返す関数を作る

console.log(randomRangeNum(3, 10));

function randomRangeNum(num1, num2) {
    var num3 = Math.floor(Math.random() * (num2 - num1 + 1) + num1)
    return num3
}

// Q5 引数に文字列を入れ、5文字以上の場合は、４文字までとし、以降を…とする関数をつくる

console.log(strength('aaaa'));
console.log(strength('12345'));
console.log(strength('123456'));

function strength(str) {
    if (str.length > 4) {
        return str.substr(0, 4) + '...'
    } else {
        return str
    }
}

// Q6 引数に数字を渡すと、金額表記の文字列に変換して戻り値（return）で返す関数を作る

console.log(getMoneyFormat(1000000))

function getMoneyFormat(num) {
    var str = String(num)
    var newString = ''
    for (var i = str.length - 1, j = 1; i >= 0; i--, j++) {
        console.log(i, j)
        if (j % 3 === 0 && j !== str.length) {
            newString = ',' + str[i] + newString
        } else {
            newString = str[i] + newString
        }
    }
    return newString
}
