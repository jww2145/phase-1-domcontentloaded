function changeText(){
    const text = document.querySelector('#text')
    text.textContent = "This is really cool!"
}

document.addEventListener("DOMContentLoaded", changeText)