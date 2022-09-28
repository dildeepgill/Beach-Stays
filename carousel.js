const forward = document.querySelector(".forward")
const backward = document.querySelector(".backward")
const img1 = document.getElementsByClassName("img-1")
console.log(backward)

let imgIndex = 0

const picForward = () => {
    if (imgIndex === 2) {
        imgIndex = 0
        img1[imgIndex].style.visibility = "visible"
        img1[imgIndex + 2].style.visibility = "hidden"

    } else {
        imgIndex++
        img1[imgIndex].style.visibility = "visible"
        img1[imgIndex - 1].style.visibility = "hidden"
    }

}

const picBackward = () => {
    if (imgIndex === 0) {
        imgIndex = 2
        img1[imgIndex].style.visibility = "visible"
        img1[imgIndex - 2].style.visibility = "hidden"

    } else {
        imgIndex--
        img1[imgIndex].style.visibility = "visible"
        img1[imgIndex + 1].style.visibility = "hidden"
    }

}

forward.addEventListener('click', picForward)
backward.addEventListener('click', picBackward)