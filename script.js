// let Cmail = document.getElementById('email').value;
let password = document.getElementById('password');
let login = document.querySelector('.btn-login');

let correctEmail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// if(email != correctEmail ){
//     // document.getElementById('info').innerHTML='Your email is not correct';
// }

function validEmail(email){
    let correctEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return correctEmail.test(email);
}

console.log(validEmail('tolu@gmail.com'));


login.addEventListener('click',function(e){
    e.preventDefault();

    let email = document.getElementById('email');
    let emailValue= email.value;
    if(validEmail(emailValue)){
        document.getElementById('info').innerHTML='loggedIn';
    }else{
        document.getElementById('info').innerHTML='Your email is not correct';
    }
    console.log('enter');
})