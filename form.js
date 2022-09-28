const formEl = document.querySelector('form')

formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    const both = document.querySelectorAll("input")
    const textareaEl = document.querySelector("textarea")
    const [first, email] = both
    let inputEmail = email.value
    let inputFirstName = first.value
    let inputTextArea = textareaEl.value
    displayComment(inputEmail, inputFirstName, inputTextArea)
    first.value = ""
    email.value = ''
    textareaEl.value = ''
})

function displayComment(inputEmail, inputFirstName, inputTextArea) {
    console.log(inputTextArea)
    const container = document.querySelector('.appendThis')
    container.innerHTML += `  
    <div class="firstpic">
    <figure class="comment1-picture">
        <img src="./beach-final-images/comment-image.jpg">
    </figure>
    <div class="comment-div-wrapper">
        <h6>${inputFirstName}</h6>
        <p>${inputTextArea}</p>
    </div>
`
}



















// function displayComment(para, h6) {
//     const container = document.querySelector(".appendThis")
//     const div = document.createElement('div')
//     div.classList.add('firstpic')
//     container.appendChild(div)
//     const figure = document.createElement('figure')
//     figure.classList.add("comment2-picture")
//     div.appendChild(figure)
//     const img = document.createElement('img')
//     img.src = "./beach-final-images/comment-image2.jpg"
//     figure.appendChild(img)
//     const div2 = document.createElement('div')
//     div2.classList.add("comment-div-wrapper")
//     container.appendChild(div2)
//     h6 = document.createElement('h6')
//     div2.appendChild(h6)
//     para = document.createElement('p')
//     div2.appendChild(para)
//     console.log(container)
// }


commentArray = [];

const section2Contact = document.querySelector(".section2ContactForm");

let arrayIndex = 0;
function createArray() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("part2FirstContainer");
    newDiv.innerHTML =
    <figure class="part2FirstImg">
        <img src="${commentArray[arrayIndex].image}">
    </figure>
    <div class="part2FirstContent">
        <h5>${commentArray[arrayIndex].date} by ${commentArray[arrayIndex].userName}</h5>
        <p>${commentArray[arrayIndex].userComment}</p>
    </div>
        ;
    section2Contact.parentNode.insertBefore(newDiv, section2Contact);
    arrayIndex = arrayIndex + 1;
}

function randomNums() {
    return Math.floor(Math.random() * 2) + 1;
}

const formElement2 = document.querySelector(".commentForm");
formElement2.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputElement = document.querySelectorAll("input");
    const textElement = document.querySelector("textarea");
    const [name, email] = inputElement;
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const format = new Intl.DateTimeFormat('en-US', options).format(date).replace(/,/, '');
    const newComment = {
        userName: name.value,
        date: format,
        userComment: textElement.value,
        image: ./ the - restaurant - mall - assets / the - restaurant - mall - assets / comment - ${ randomNums()
}.jpg" alt="There is a one girl in the picture
    }
    commentArray.push(newComment);
createArray();
name.value = "";
email.value = "";
textElement.value = "";
})