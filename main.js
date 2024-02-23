const btnCookie = document.querySelector("#fortune-cookie")
const btnReturn = document.querySelector("#btn-return")
const home = document.querySelector(".home")
const luck = document.querySelector(".luck")
const luckMessagesList = document.querySelectorAll(".card p")
let randomNumber = (Math.round(Math.random() * (luckMessagesList.length - 1)))

btnReturn.addEventListener('click', handleReturn)
btnCookie.addEventListener('click', handleOpenCookie)
document.addEventListener('keydown', handleOpenCookieKey)

function handleOpenCookieKey(event) {
    if(event.key == 'Enter' && luck.classList.contains('hide')){
        handleOpenCookie()
    }
}

function handleOpenCookie() {
    toggleHideScreen()
    toggleHideRandomCard(randomNumber)
}


function handleReturn() {
    toggleHideScreen()
    randomNumber = (Math.round(Math.random() * 9))
}

function toggleHideScreen() {
    home.classList.toggle('hide')
    luck.classList.toggle('hide')
}

function toggleHideRandomCard(randomNumber) {
    for(let message of luckMessagesList) {
        if(message == luckMessagesList[randomNumber]){
            if(message.classList.contains('hide')){
                message.classList.remove('hide')
            }
        }else {
            if(!(message.classList.contains('hide'))){
                message.classList.add('hide')
            }
        }
    }
}

