const eyeOpen = document.querySelector('.fa-eye');
const eyeClose = document.querySelector('.fa-eye-slash');

const inputBox = document.querySelector('.input-box');
const inputField = document.getElementById('pass-input');


eyeClose.addEventListener('click', () =>{
    eyeClose.classList.add('active');
    eyeOpen.style.display = "block"

    inputBox.classList.add('active')
    inputField.classList.add('active')
    inputField.type = "text";
})

eyeOpen.addEventListener('click', () =>{
    eyeClose.classList.remove('active');
    eyeOpen.style.display = "none"

    inputBox.classList.remove('active')
    inputField.classList.remove('active')
    inputField.type = "password";
})