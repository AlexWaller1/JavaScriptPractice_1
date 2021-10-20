console.log(window);
// window.alert(37);

// single element

const numberForm = document.getElementById("numbers-form");
console.log(numberForm);
// prints HTML of form to the console
const numberForm2 = document.querySelector("numbers-form");
console.log(numberForm2);
// returned null
console.log(document.querySelector("h1"));
// prints <h1> HTML to the console

// multiple element
console.log(document.querySelectorAll('.number'));
// NodeList(3) [li.number, li.number, li.number]
console.log(document.getElementsByClassName('number'));
// HTMLCollection(3) [li.number, li.number, li.number]
console.log(document.getElementsByTagName('li'));
// HTMLCollection(3) [li.number, li.number, li.number]

const numbers1 = document.querySelectorAll('.number');

numbers1.forEach((number) => console.log(number));
// prints out each HTML element of the number class to the console
