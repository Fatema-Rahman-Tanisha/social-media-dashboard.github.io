console.log('mode')
var boxes = document.querySelectorAll('.box')
var heading = document.querySelector('.heading')
var cardboxdash = document.querySelector('.cardboxdash')
var overview = document.querySelector('.overview')
var body = document.querySelector('body')
var boxesArr = Array.from(boxes)
chk.onchange = function () {
    if (this.checked) {
        for (let i = 0; i < boxesArr.length; i++) {
            boxesArr[i].style.backgroundColor = '#252b43'
            boxesArr[i].style.color = '#fff'
        } 
        overview.style.backgroundColor = 'black'
        heading.style.backgroundColor = 'black'
        body.style.backgroundColor = 'black'
        cardboxdash.style.background = "black"
        body.style.color = 'white'
    }
    else {
        for (let i = 0; i < boxesArr.length; i++) {
            boxesArr[i].style.backgroundColor = '#f0f3fa'
            boxesArr[i].style.color = 'black'
        }
        overview.style.backgroundColor = 'white'
        heading.style.backgroundColor = 'white'
        body.style.backgroundColor = 'white'
        cardboxdash.style.background = "white"
        body.style.color = 'black'
    }
}

