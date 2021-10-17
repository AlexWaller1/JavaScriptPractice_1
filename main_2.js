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