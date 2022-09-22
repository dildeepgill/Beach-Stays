const hamburger = document.querySelector(".mobile-nav")
const xMark = document.querySelector(".toggle")


function openNav() {
    hamburger.style.visibility = "hidden"
    hamburger.style.opacity = "0"
    xMark.style.visibility = "visible"
    xMark.style.opacity = "1"

}

function closeNav() {
    xMark.style.visibility = "hidden"
    xMark.style.opacity = "0"
    hamburger.style.visibility = "visible"
    hamburger.style.opacity = "1"
}


hamburger.addEventListener('click', openNav)
xMark.addEventListener('click', closeNav)




