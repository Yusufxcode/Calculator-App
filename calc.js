let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let symbol = document.querySelector('.symbol');
let total = document.querySelector('.total');
let add = document.querySelector('#add');
let sub = document.querySelector('#sub');
let mult = document.querySelector('#mult');
let div = document.querySelector('#div');
let reset = document.querySelector('#reset');
let equalTo = document.querySelector('#equalTo');

add.addEventListener('click', function(){
    symbol.innerHTML = '+';
})

sub.addEventListener('click', function(){
    symbol.innerHTML = '-';
})

mult.addEventListener('click', function(){
    symbol.innerHTML = 'x';
})

div.addEventListener('click', function(){
    symbol.innerHTML = '/';
})

equalTo.addEventListener('click', function(){
    if(symbol.innerHTML === '+'){
        let number = parseInt(num1.value) + parseInt(num2.value);
        total.innerHTML = number;
    }else if (symbol.innerHTML === '-'){
        let number = parseInt(num1.value) - parseInt(num2.value);
        total.innerHTML = number;
    }else if (symbol.innerHTML === 'x'){
        let number = parseInt(num1.value) * parseInt(num2.value);
        total.innerHTML = number;
    }else {
        let number = parseInt(num1.value) / parseInt(num2.value);
        total.innerHTML = number;
    }
})

reset.addEventListener('click', function(){
    num1.value = '';
    num2.value = '';
    total.innerHTML = '0';
})
