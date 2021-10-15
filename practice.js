console.log("Hello, Neptune");

const robots = ["Hank-44", "Warren-21", "Mellon-Tech",
"Eggplant-Head"];

const hammerHead = ["Hammerhead", "Geometry Man", "Taylor", 
"Harvey", "Wibaux", "The Cosmic Trout"];

const troutNo = [37, 44, 29, 87, 56, 11, 34, 45];

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
}


