// choice activ Login and SignUp-------------------------
const button_SignUp = document.querySelector('.button-SignUp')
const button_Login = document.querySelector('.button-Login')
const SignUp = document.querySelector('.SignUp')
const Login = document.querySelector('.Login')

const section2 = document.querySelector('.section2').children

const lengthCec = section2.length

button_SignUp.onclick = ()=>{
    change('SignUp')
}
button_Login.onclick = ()=>{
    change('Login')
}

function change(e){
    for ( let i = 0 ; i < lengthCec ; i++ ){
        section2[i].classList.remove('active')
        button_SignUp.classList.remove('shadow')
        button_Login.classList.remove('shadow')

    }
    if (e == 'SignUp') {
        SignUp.classList.add('active')
        button_SignUp.classList.add('shadow')

    }
    if (e == 'Login') {
        Login.classList.add('active')
        button_Login.classList.add('shadow')
    }

}



// SignUp-------------------------------------------



const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit',(e)=>{
    
    console.log('usernameValue')
    e.preventDefault();

    checkInput();
})
 function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    // console.log(usernameValue)

    if(usernameValue === ''){
        console.log("usernameValue")
 
        setError(username , 'This field cannot be empty. Choose a name for yoursel')
    }else{
        setSuccess(username)
    }

    
    if(emailValue === ''){
        setError(email , 'Email cannot be empty.')

    }else if(!isEmail(emailValue)){
        setError(email, 'The email address is incorrect.');
    }else{
        setSuccess(email);
    }


        
    if(passwordValue === ''){
        setError(password, 'the password field is empty. Please enter a password.')
    }else{
        setSuccess(password);
    }
    


    if(password2Value === ''){
        setError(password2, 'The password field is empty. Please enter a password.');
    }else if(passwordValue !== password2Value){
        setError(password2, 'Passwords do not match.')
    }
    else{
        setSuccess(password2);
    }

 }
function setError(input, message){
    const formControl = input.parentElement;
    console.log(formControl)
    const span = formControl.querySelector('span');
    console.log(span)

    span.innerHTML = message;
    formControl.className = "form-control error"
}
function setSuccess(input){
    const formControll = input.parentElement;
    formControll.className = "form-control success"
}



const pattern =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isEmail(email){
    return pattern.test(email);
}


// Login-----------------------------------------------


const form_Login = document.getElementById('form-Login');
const email_Login = document.getElementById('email-Login');
const password_Login = document.getElementById('password-Login');


form_Login.addEventListener('submit',(e)=>{
    
    // console.log('usernameValue')
    e.preventDefault();

    checkInput2();
})
 function checkInput2(){
    const emailValue_Login = email_Login.value.trim();
    const passwordValue_Login = password_Login.value.trim();
    console.log(passwordValue_Login)
    
    if(emailValue_Login === ''){
        setError2(email_Login , 'Email cannot be empty.')

    }else if(!isEmail(emailValue_Login)){
        setError2(email_Login, 'The email address is incorrect.');
    }else{
        setSuccess2(email_Login);
    }


        
    if(passwordValue_Login === ''){
        setError2(password_Login, 'the password field is empty. Please enter a password.')
    }else{
        setSuccess2(password_Login);
    }
    
 }
function setError2(input, message){
    const formControl = input.parentElement;
    console.log(formControl)
    const span = formControl.querySelector('span');
    console.log(span)

    span.innerHTML = message;
    formControl.className = "form-control error"
}
function setSuccess2(input){
    const formControll = input.parentElement;
    formControll.className = "form-control success"
}
