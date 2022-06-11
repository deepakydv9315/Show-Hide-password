const eyeOpen = document.querySelector('.fa-eye');
const eyeClose = document.querySelector('.fa-eye-slash');

const inputBox = document.querySelector('.input-box');
const inputField = document.getElementById('pass-input');


eyeClose.addEventListener('click', () =>{
    eyeClose.classList.remove('active');
    eyeOpen.classList.add('active');

    inputBox.classList.add('active')
})