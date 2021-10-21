const numbersForm = document.querySelector('#numbers-form');
const numberInput1 = document.querySelector('#number');
const msg = document.querySelector('.msg');
const numberList = document.querySelector('#numbers');

console.log(numbersForm);


numbersForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    console.log(numberInput1.value);

    if (numberInput1 === '') {
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