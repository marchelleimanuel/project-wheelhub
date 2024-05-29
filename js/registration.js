// register page
const usernameTf = document.getElementById('username');
const emailTf = document.getElementById('email');
const passwordTf = document.getElementById('password');
const confPasswordTf = document.getElementById('confPassword');
const maleRadio = document.getElementById('gender-male');
const femaleRadio = document.getElementById('gender-female');
const dob = document.getElementById('dob');
const agreementCb = document.getElementById('agreement'); 
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function() {
    if(usernameTf.value.trim() == "") {
        alert('Username must be filled!');
    } 
    else if(emailTf.value.trim() == "") {
        alert('Email must be filled!');
    } 
    else if(!emailTf.value.endsWith("@gmail.com")) {
        alert('Email must be ends with @gmail.com!');
    } 
    else if (passwordTf.value.trim() == "") {
        alert('Password must be filled!');
    }
    else if(passwordTf.value.length < 8 ) {
        alert('Password must be minimum 8 characters');
    } 
    else if(!isAlphanumeric(passwordTf.value)) {
        alert('Password must be alphanumeric');
    }
    else if (confPasswordTf.value.trim() == "") {
        alert('Confirmation password must be filled!');
    }
    else if(confPasswordTf.value != passwordTf.value) {
        alert('Password not match!');
    }
    else if (!maleRadio.checked && !femaleRadio.checked) {
        alert('Select your gender!');
    }
    else if(dob.value == "") {
        alert('Input your date of birth!')
    }
    else if(!agreementCb.checked) {
        alert('Checkbox must be checked!');
    }
    else {
        alert('Registration Success!');
        window.location.href = "../Pages/home.html";
    }
});

function isAlphanumeric(password) {
    let isNumber = false;
    let isAlphabet = false;

    for(let i = 0; i < password.length; i++) {
        const charCode = password.toLowerCase().charCodeAt(i);
        if(charCode >= 97 && charCode <= 122) {
            isAlphabet = true;
        }
        else if(charCode >= 48 && charCode <= 57) {
            isNumber = true;
        }
    }
    if(isAlphabet == true && isNumber == true) {
        return true;
    }
    return false;
}











