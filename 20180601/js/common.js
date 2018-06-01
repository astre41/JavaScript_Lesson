$('.box').parallaxFit({
    start: 0,
    end: 500,
    fromStyle: {
        transform: 'scale(1) rotate(0 deg)',
        backgroundColor: 'rgb(255,0,0)'
    },
    toStyle: {
        transform: 'scale(2) rotate(180 deg)',
        backgroundColor: 'rgb(0,0,255)',
        left: '300px'
    },
    motion1Start: 600,
    motion1End: 800,
    motion1ToStyle: {
        top: '200px'
    },
    motion1Easing: 'easeInElastic',

    motion2End: 1500,
    motion2ToStyle: {
        width: '300px',
        height: '500px'
    },

    motion2Easing: 'easeInElastic',

    motion3Start: 1500,
    motion3End: 800,
    motion3fromStyle: {
        transform: 'scale(1) rotate(0 deg)',

    },
    motion3ToStyle: {
        backgroundColor: 'rgba(255,255,255)'

    },

    motion3Easing: 'easeOutElastic',

    motion4Start: 800,
    motion4End: 1500,
    motion4fromStyle: {
        backgroundColor: 'rgba(255,255,255)'
    },

    motion4ToStyle: {
        backgroundColor: 'rgba(0,0,0)'

    },

    motion3Easing: 'easeOutElastic'

})
