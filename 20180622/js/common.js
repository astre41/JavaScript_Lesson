//var a = 10
//var b = 20

//console.log('Q1', a + b)
//
//a = b
//
//console.log('Q2', a, b)
//console.log(a === b)

//
//console.log(Boolean(1))
//console.log(Boolean(0))
//console.log(Boolean(''))
//console.log(Boolean('test'))
//
//var num = 10
//console.log(num % 3)
//console.log(num % 2)
//
//var num = 10
//num += 10
//num++
//
//console.log(num)
//
//
//var num = 10
//
//if (num > 10 && num < 100) {
//    console.log('OK!')
//} else {
//    console.log('NO!')
//}
//
//for (var i = 0; i < 100; i++) {
//    if (i % 2 === 0) {
//        console.log(i + 'は偶数')
//    }
//}

for (var i = 0; i < 100; i++) {
    $('body').append('<div class="box"></div>');
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    $('.box').eq(i).css({
        left: Math.random() * 1000 + 'px',
        top: Math.random() * 1000 + 'px',
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')'
    })

    $('.box').eq(i).parallaxSpeed({
        style: 'top',
        speed: Math.random() * 2 - 1,
        fixStyleVAlue: String($('.box').eq(i).css('top')),
        fixScrollPosition: 0
    });
}
