function divisibleBy3(num1 = 0, num2 = 100){
    let count = 0;
    let rStatement = ``;
    for (i = num1; i <= num2; i++){
        if(i % 3 == 0){
          count = count + 1;
          rStatement = `There are ${count} numbers between
          ${num1} and ${num2} divisble by 3.`
        }
    }
   return rStatement;
}

console.log(divisibleBy3());
// There are 34 numbers between 0 and 100 divisble by 3

console.log(divisibleBy3(3, 33));
// There are 11 numbers between 3 and 33 divisible by 3.

console.log('-----------------------------------------------');
console.log('-------------------------------------------------');

function factorialNumber(number1 = 5){
    let product = 1;
    let rStatement2 = ``;
    for (let i = number1; i > 0; i--){
        product = product * i;
        rStatement2 = `${number1}! = ${product}`;
    }
    return rStatement2;
}

console.log(factorialNumber());
// 5! = 120
console.log(factorialNumber(9));
// 9! = 362880
console.log(factorialNumber(4));
// 4! = 24