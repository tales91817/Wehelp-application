addEventListener('scroll', function reveal() {
    const reveals = document.querySelectorAll('.reveal')

    for (let i = 0; i < reveals.length; i++) {
        let windowheight = this.window.innerHeight
        let revealtop = reveals[i].getBoundingClientRect().top
        let revealPoint = 150

        if (revealtop < windowheight - revealPoint) {
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active')
        }
    }
})

const select = document.querySelector('.custom-select')
const firstTable = document.querySelector('.first-step')
const secondTable = document.querySelector('.second-step')
const thirdTable = document.querySelector('.third-step')

select.addEventListener('click', (event) => {
    const formValue = Number(event.target.value)
    
    if(formValue === 1) {
        secondTable.classList.remove('active')
        thirdTable.classList.remove('active')
        firstTable.classList.add('active')
    } else if (formValue === 2) {
        firstTable.classList.remove('active')
        thirdTable.classList.remove('active')
        secondTable.classList.add('active')
    } else if (formValue === 3) {
        firstTable.classList.remove('active')
        secondTable.classList.remove('active')
        thirdTable.classList.add('active')
    } else {
        firstTable.classList.remove('active')
        secondTable.classList.remove('active')
        thirdTable.classList.remove('active')
    }
    
})


// modal JS
let modal = document.querySelector('#myModal')

let img = document.querySelector('#myImg')
let modalImg = document.querySelector('#img-Rank')
let captionText = document.querySelector('#caption')

img.addEventListener('click', function imgOnClicked() {
    modal.style.display = 'block'
    modalImg.src = this.src
    captionText.innerHTML = this.alt
})

let span = document.getElementsByClassName('close')[0]

span.addEventListener('click', function closeButtonOnClicked() {
    modal.style.display = 'none'
})