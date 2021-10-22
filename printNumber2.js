const numbersForm = document.querySelector('#numbers-button');
const numberInput1 = document.querySelector('#number');
const msg = document.querySelector('.msg');
const numberList = document.querySelector('#numbers');

console.log(numbersForm);






numbersForm.addEventListener('click', onSubmit);

function onSubmit(e) {
   // e.preventDefault();
    console.log(numberInput1.value);

    if (numberInput1.value.trim() === '') {
        msg.innerHTML = 'Please Fill Out Form.';
    }
    else {
        console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`
        The number is ${numberInput1.value}`));
        numberList.appendChild(li);

        // clear fields
        numberInput1.value = '';
    }
       
}




let date = new Date().getFullYear();
console.log(date);
// 2021


let today = new Date();
let date2 = `${today.getMonth()+1}-${today.getDate()}-${today.getFullYear()}`;
console.log(date2);
// 10-21-2021

let today2 = new Date();
console.log(today2);
// definitely best way to do this

let bodhi = 'bodhi';
console.log(bodhi);
bodhi = bodhi.toUpperCase();
console.log(bodhi);