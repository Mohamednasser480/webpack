import '../styles/style.css';
import '../sass/style.scss';
import img1 from '../images/slider-3.jpg';
import img2 from '../images/welcome-1.jpg';
import img3 from '../images/welcome-2.jpg';

/**** CHANGE NAVBAR BACKGROUND*/

var navBar = document.querySelector('.my-nav');
window.onscroll = function (e) { 
    // if (document.documentElement.scrollTop >= 650  || (document.documentElement.scrollTop >= 400 && window.innerWidth <= 992) ) {
        if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
        navBar.style.backgroundColor = '#262626';
        navBar.style.transition = '0.5s all';

    } 
    else {
        navBar.style.backgroundColor = 'transparent';
    }
};

/**** DISPLAY MENU DATA*/
import {menuData} from './menu-data.js';
const menuli = document.querySelectorAll('.menu li');
for(let i = 0;i<menuli.length;i++)
    menuli[i].addEventListener('click',(e)=>{
        display(e.target.innerText);
    })

function display(menu){
    const menuContainer = document.getElementById('menu-container');
    let str='';
    for(let objData of menuData[menu]){
        str+= `
            <div class="menu-item col-md-5 col-sm-10">
                <div>
                    <h3>${objData.title}</h3>
                    <p>${objData.description}</p>
                </div>
                <div>
                    <p>${objData.price}</p>
                </div>
            </div>`;
    }
    menuContainer.innerHTML = str;
}
display('STARTERS');

/**** FORM VALIDATIOM MENU DATA ****/
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const btnBook = document.getElementById('btn-book');
function validate(Input,regx){
    let val = Input.value;
    if(val.length == 0 || regx.test(val) === false){
        Input.classList.add('is-invalid');
        Input.classList.remove('is-valid');
        return 0;
    }
    Input.classList.add('is-valid');
    Input.classList.remove('is-invalid');
    return 1;
}
nameInput.addEventListener('keyup',()=>{
    validate(nameInput,/^[a-z A-Z]+$/);
});
phoneInput.addEventListener('keyup',()=>{
    validate(phoneInput,/^(010|011|012)[0-9]{8}$/);
});
emailInput.addEventListener('keyup',()=>{
    validate(emailInput,/^[a-zA-z][a-zA-Z0-9_.]*@[a-zA-Z]+(\.[a-zA-Z]+)+$/);
});
messageInput.addEventListener('keyup',()=>{
    let val = messageInput.value;
    if(val.length == 0)
        messageInput.classList.add('is-invalid');
    else
        messageInput.classList.remove('is-invalid');
});
btnBook.onclick = ()=>{
    let isValid = true;
    isValid &= validate(nameInput,/^[a-z A-Z]+$/);
    isValid &= validate(emailInput,/^[a-zA-z][a-zA-Z0-9_.]*@[a-zA-Z]+(\.[a-zA-Z]+)+$/);
    isValid &= validate(phoneInput,/^(010|011|012)[0-9]{8}$/);
    isValid &= !(messageInput.value.length===0);
    if(isValid){
        confirm(`Hello ${nameInput.value} , your booking is saved successfully `);
        nameInput.value = '';
        nameInput.classList.remove('is-valid');

        emailInput.value= '';
        emailInput.classList.remove('is-valid');

        phoneInput.value= '';
        phoneInput.classList.remove('is-valid');

        messageInput.value='';
        messageInput.classList.remove('is-valid');
    }
}
