const hamburger = document.querySelector(".fa-bars")
const xMark = document.querySelector(".toggle")




function openNav() {
    hamburger.style.display = 'none'
    xMark.style.display = 'block'
}

function closeNav() {
    xMark.style.display = 'none'
    hamburger.style.display = 'block'
}






hamburger.addEventListener('click', openNav)
xMark.addEventListener('click', closeNav)


