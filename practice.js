console.log("Hello, Neptune");

const robots = ["Hank-44", "Warren-21", "Mellon-Tech",
"Eggplant-Head"];

const hammerHead = ["Hammerhead", "Geometry Man", "Taylor", 
"Harvey", "Wibaux", "The Cosmic Trout"];

const troutNo = [37, 44, 29, 87, 56, 11, 34, 45];

const frogNo = [1, 2, 4, 5, 9, 12, 16, 21, 24, 25, 36];

let t4 = robots[0];
console.log(t4);

if (robots[0] == "Hank-44"){
    for (let hh1 = 0; hh1 < robots.length; hh1++){
        console.log(robots[hh1]);
    }
}

if (robots[1] === "Warren-21"){
    let hh1 = 0;
    while(hh1 < robots.length){
        console.log(robots[hh1]);
        hh1++;
    }
}

console.log("Bodhi");
console.log("Beezer");
console.log("Chipper");

if (robots[2] === "Mellon-Tech"){
    let hh1 = 0;
    do{
        console.log(robots[hh1]);
        hh1++;
    }while(hh1 < robots.length);
}

let r7 = troutNo[0] * troutNo[1];
console.log(r7);
// 1628

console.log(37 % 10);
// 7

let aa1 = 37 % 10;
let aa2 = 3 % 10;
console.log(aa1 + aa2);
let aa3 = 37 / 10;
console.log(aa3);
// 3.7

console.log('--------------------------');

if (hammerHead[0] == "Hammerhead"){
    let hh1 = 73;
    let sum = 0;
    for (; hh1 != 0; hh1 = hh1 / 10){
        sum = sum + (hh1 % 10);

    }
    console.log(sum);
}

if (hammerHead[4] == "Wibaux"){
    let hh1 = hammerHead[0];
    // Hammerhead
    hh1 = hh1.substring(0, 6);
    console.log(hh1);
    // Hammer
}

console.log(hammerHead.length);
// 6
console.log(hammerHead[5]);
// The Cosmic Trout
if (robots[3] == 'Eggplant-Head'){
    for (let hh1 = 0; hh1 < robots.length; hh1++){
        let hh2 = `How's it going, ${robots[hh1]}?`;
        console.log(hh2);
        // How's it going, Hank-44?
        // How's it going, Warren-21?
        // How's it going, Mellon-Tech?
        // How's it going, Eggplant-Head?
    }
}

if (hammerHead[4] == 'Wibaux'){
    let r2 = robots[2];
    // Mellon-Tech
    r2 = r2.replace('-', '===');
    console.log(r2);
    // Mellon===Tech
    r2 = r2.toUpperCase();
    console.log(r2);
    // MELLON===TECH
    
}

if (hammerHead[5] === "The Cosmic Trout"){
    hh1 = 35;
    if (hh1 % 5 == 0 && hh1 % 3 == 0){
        console.log("FizzBuzz");
    }
    else if (hh1 % 5 == 0){
        console.log("Fizz");
    }
    else if (hh1 % 3 == 0){
        console.log("Buzz");
    }
    else
       console.log("No Fizz Buzz")
}

if (robots[0] == "Hank-44"){
    for (let hh1 = 0; hh1 < troutNo.length; hh1++){
        let trout1 = troutNo[hh1];
        if (trout1 % 5 == 0 && trout1 % 3 == 0){
            console.log(`${trout1} FizzBuzz`);
        }
        else if (trout1 % 5 == 0){
            console.log(`${trout1} Fizz`);
        }
        else if (trout1 % 3 == 0){
            console.log(`${trout1} Buzz`);
        }
        else
           console.log(`${trout1} No FizzBuzz`);
    }
}


console.log(Math.sqrt(36));
// 6
console.log(Math.max(2, 37));
// 37
console.log(Math.pow(9, 2));
// 81
console.log('---------------------------------------------');
console.log('---------------------------------------------');

if (robots[2] == 'Mellon-Tech'){
    for (let hh1 = 0; hh1 < frogNo.length; hh1++){
        let frog1 = frogNo[hh1];
        let exponent1 = Math.pow(frog1, 2);
        console.log(exponent1);
        // 1
        // 4
        // 16
        // 25
        // 81
        // 144
        // 256
        // 441
        // 576
        // 625
        // 1296
    }
}