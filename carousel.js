const forward = document.querySelector(".forward")
const backward = document.querySelector(".backward")
const img1 = document.getElementsByClassName("img-1")

let imgIndex = 0

const picForward = () => {
    if (imgIndex === 2) {
        imgIndex = 0
        img1[imgIndex].style.display = "block"
        img1[imgIndex + 2].style.display = "none"


    } else {
        imgIndex++
        img1[imgIndex].style.display = "block"
        img1[imgIndex - 1].style.display = "none"
    }
    console.log(imgIndex)

}

const picBackward = () => {
    if (imgIndex === 0) {
        imgIndex = 2
        img1[imgIndex].style.display = "block"
        img1[imgIndex - 2].style.display = "none"

    } else {
        imgIndex--
        img1[imgIndex].style.display = "block"
        img1[imgIndex + 1].style.display = "none"
    }
    console.log(imgIndex)
}



forward.addEventListener('click', picForward)
backward.addEventListener('click', picBackward)