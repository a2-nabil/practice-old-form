// Selecting Elements

var openBtn = document.querySelector('.opn_btn')
var sideMenu = document.querySelector('.side_menu')

openBtn.addEventListener('click', function(){
    sideMenu.classList.toggle('active')

});


// Colouring Buttons

var btnOne = document.querySelector('.btn1')
var btnTwo = document.querySelector('.btn2')
var btnThree = document.querySelector('.btn3')
var btnFour = document.querySelector('.btn4')
var bodyTag = document.querySelector('body')
var formBg = document.querySelector('#form-BG')
var textColor = document.querySelector('.text_color')
var textColorTwo = document.querySelector('.text_color2')
var textColorThree = document.querySelector('.text_color3')


btnOne.addEventListener('click', function(){
    bodyTag.style.background = '#64E958'
    textColor.style.color = '#64e958'
    textColorTwo.style.color = 'green'
    textColorThree.style.color = 'tomato'
});

btnTwo.addEventListener('click', function(){
    bodyTag.style.background = '#E95858'
    textColor.style.color = '#E95858'
    textColorTwo.style.color = 'green'
    textColorThree.style.color = 'tomato'

});

btnThree.addEventListener('click', function(){
    bodyTag.style.background = '#6E58E9'
    textColor.style.color = '#6E58E9'
    textColorTwo.style.color = 'green'
    textColorThree.style.color = 'tomato'
});
btnFour.addEventListener('click', function(){
    bodyTag.style.background = 'darkgray'
    textColor.style.color = 'black'
    textColorTwo.style.color = 'blue'
    textColorThree.style.color = 'green'
});

// Part Two JS

// Form Validation

var firstName = document.querySelector('#firstName')
var lastName = document.querySelector('#lastName')
var email = document.querySelector('#email')
var password = document.querySelector('#pass')
var rePass = document.querySelector('#repass')
var submitBtn = document.querySelector('#btn')
var outPut = document.querySelector('#output')


submitBtn.addEventListener('click', function(){
   
    if(firstName.value == '' || lastName.value == '' || email.value == '' || password.value == '' || rePass.value =='') {
       outPut.innerHTML ="Please Fill Up"
    }
    else{
        if(firstName.value.length > 10 && lastName.value.length > 10 ){
        outPut.innerHTML ="Your Input is more than 10"
        firstName.style.borderColor ="red"
        lastName.style.borderColor ="red"

        } 
        else if(isNaN(password)){
            alert("Invaid")
        }

        else if(password.value != rePass.value){
            alert('password match kore nai')
            password.style.borderColor = "green"
            rePass.style.borderColor = "red"

        }

    }

})


