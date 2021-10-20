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

const ul = document.querySelector('.numbers');
// ul.remove();
// will remove that HTML element from the DOM

// ul.lastElementChild.remove();
// will remove last HTML element of that class

// ul.firstElementChild.textContent = 'Hi, Bodhi!';
// will change the text of the slected HTML element

// ul.children[1].innerText = 'Hi, Chipper!';
// will change the text of the selected HTML element

// ul.lastElementChild.innerHTML = '<h1>Hi, Beezer!</h1>';
// will change the content and HTML element of the selected element

const button1 = document.getElementById('numbers-button');
button1.style.background = 'green';
// turns the button green
button1.addEventListener('click');
