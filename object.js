console.log("Greetings, Mars.");

const robots = ['Hank-44', 'Warren-21', 'Mellon-Tech',
'Eggplant-Head'];

const timberTron = ['Timber-Io', 'Timber Technoid', 'Timber_Git'];

const emptyArray = [];

console.log(robots);

const hammerHead = ['Hammerhead', 'Geometry Man', 'Taylor', 
'Harvey', 'Wibaux', 'The Cosmic Trout'];

console.log('----------------------------------------------');
console.log(hammerHead);

const crashBandicoot = ['Crash Bandicoot', 'Cortex', 'Ripper Roo',
'Spyro', 'Dingodile', 'Tiny Tiger', 'Crunch Bandicoot', 'N. Ginn'];

console.log('----------------------------------------------');
console.log(crashBandicoot);

const troutNo = [37, 44, 29, 87, 56, 11, 34, 45];

console.log('----------------------------------------------');
console.log(troutNo);

const frogNo = [1, 2, 4, 5, 9, 12, 16, 21, 24, 25, 36];

console.log('----------------------------------------------');
console.log(frogNo);

const bandicoot = {
    firstName: 'Crash',
    lastName: 'Bandicoot',
    species:'Bandicoot',
    interests: 'Nitro Cart Racing',
    personality: 'Highly Enthusiastic',
    rival: 'Doctor Neo Cortex',
    placeOfBirth: 'Outback, Australia',
    carts: {
        cart1: 'The Crash Wagon',
        cart2: 'The Cortex Warp Cart'
    },
    friends: ['Spyro', 'Coco', 'Shifty', 'King Chicken']
}

console.log('-----------------------------------------------');
console.log(bandicoot);

const cortex = {
    firstName: 'Neo',
    lastName: 'Cortex',
    species: 'Human',
    interests: 'Cutting Edge Science',
    personality: 'Devious and Enigmatic',
    rival: 'Crash Bandicoot',
    placeOfBirth: 'Peoria, Illinois',
    carts:{
        cart1: 'Oxide Cruiser',
        cart2: 'Dingo-Mobile'
    },
    friends: ['N. Ginn', 'Dingodile', 'Tiny Tiger', 'Nitrous Oxide']
}

console.log('-----------------------------------------------------');
console.log(cortex);

const hammerHeadCharacters = [
    {
        name: 'Hammerhead',
        species: 'Hammerhead Shark',
        occupation: 'Pickerel Cola Space Truck Driver',
        hasPickerelCola: true
    },
    {
        name: 'Taylor',
        species: 'Albatross',
        occupation: 'Pickerel Cola Space Truck Driver',
        hasPickerelCola: true
    },
    {
        name: 'Wibaux',
        species: 'Whitefish',
        occupation: 'Hardin-37 Soldier',
        hasPickerelCola: false
    },
    {
        name: 'Harvey',
        species: 'Beaver',
        occupation:'Hardin-37 Soldier',
        hasPickerelCola: false
    }
];

console.log('--------------------------------------------------');
console.log(hammerHeadCharacters);
console.log('--------------------------------------------------');

if (robots[2] == 'Mellon-Tech'){
    for (robot of robots){
        console.log(robot);
        // Hank-44
        // Warren-21
        // Mellon-Tech
        // Eggplant-Head
    }
}

console.log('---------------------------------------------------');

if (crashBandicoot[0] === 'Crash Bandicoot'){
    for (crash1 of crashBandicoot){
        console.log(crash1);
        // Crash Bandicoot
        // Cortex
        // Ripper Roo
        // Spyro
        // Dingodile
        // Tiny Tiger
        // Crunch Bandicoot
        // N. Ginn
    }
}

console.log('---------------------------------------------------');

const robotCharacters = [
    {
        name: 'Hank-44',
        model: 'CurlerTron-4000',
        paintColor: 'Gray',
        city: 'Nouvelle Milwaukee, Wisconsin'
    },
    {
        name: 'Warren-21',
        model: 'Bend-O-Matic 2100',
        paintColor: 'Gray',
        city: 'Nouvelle Milwaukee, Wisconsin'
    },
    {
        name: 'Mellon-Tech',
        model: 'Fuzz-Borg 7600',
        paintColor: 'Yellow and Green',
        city: 'Bridgewater, New Jersey'
    },
    {
        name: 'Eggplant-Head',
        model: 'Distortion-Wave 2029',
        paintColor: 'Light Blue and Orange',
        city: 'Bridgewater, New Jersey'
    }
]

if (crashBandicoot[1] == 'Cortex'){
  //  for (crash1 of bandicoot){
      //  console.log(crash1.carts.cart1);
      // object is not iterable
    }
// }

if (crashBandicoot[2] == 'Ripper Roo'){
    for (shark2 of hammerHeadCharacters){
        console.log(shark2.hasPickerelCola);
        // 2 true
        // 2 false
    }
}

if (crashBandicoot[3] === 'Spyro'){
    for (crash2 of bandicoot.friends){
        console.log(crash2);
        // Spyro
        // Coco
        // Shifty
        // King Chicken
    }
}

// forEach
if (hammerHead[0] === 'Hammerhead'){
    hammerHeadCharacters.forEach(function(shark){
        console.log(shark.hasPickerelCola)
        // 2 true
        // 2 false
    })
}

if (hammerHead[1] == 'Taylor'){
    hammerHead.forEach(function(shark){
        if (shark == 3){
            console.log(shark);
            // not outputting anything to console
        }
    })
}

console.log(hammerHead[4]);
// Wibaux

if (hammerHead[4] == 'Wibaux'){
    hammerHead.forEach(function(shark){
        console.log(shark == 'Wibaux');
        // false
    })
}

const tomato1 = hammerHead.forEach(function(shark1){
    return shark1;
})

console.log(tomato1);
// undefined

const tomato2 = hammerHeadCharacters.forEach(function(shark3){
    return shark3.species;
})

console.log(tomato2);
// undefined

if (hammerHead[1] == 'Geometry Man'){
    hammerHeadCharacters.forEach(function(shark1){
        console.log(shark1.species);
        // Hammerhead Shark
        // Albatross
        // Whitefish
        // Beaver
    })
}

console.log(hammerHead[5]);
// The Cosmic Trout

if (hammerHead[5] == 'The Cosmic Trout'){
    hammerHeadCharacters.forEach(function(shark2){
        console.log(shark2.occupation);
        // 2 Pickerel Cola Space Truck Driver
        // 2 Hardin-37 Soldier
    })
}

if (crashBandicoot[0] == 'Crash Bandicoot'){
    bandicoot.friends.forEach(function(crash2){
        console.log(crash2);
        // Spyro
        // Coco
        // Shifty
        // King Chicken
    })
}

// forEach cannot return anything as anytime we try to assign it
// to a variable to log to the console it comes back as undefined
// returns objects 1 by 1

// map

if (hammerHead[0] == 'Hammerhead'){
    let shark1 = hammerHeadCharacters.map(function(shark2){
        // map function has to be applied to an array
        return shark2.name;
        // returns an array instead of separate objects
    })
    console.log(shark1);
    // ["Hammerhead", "Taylor", "Wibaux", "Harvey"]

}

if(crashBandicoot[0] == 'Crash Bandicoot'){
    let crash1 = bandicoot.friends.map(function(crash2){
        // map function has to be applied to an array
        return crash2
        // returns an array instead of separate objects
    })
    console.log(crash1);
    // ["Spyro", "Coco", "Shifty", "King Chicken"]
}
    
if (crashBandicoot[1] == 'Cortex'){
    let hammer1 = hammerHeadCharacters.map(function(shark1){
        return shark1.occupation;
        // returns an array
    })
    console.log(hammer1);
}
// ["Pickerel Cola Space Truck Driver", "Pickerel Cola Space Truck Driver"
//  "Hardin-37 Soldier", "Hardin-37 Soldier"]

console.log(crashBandicoot[2]);
// Ripper Roo

if (crashBandicoot[2] == 'Ripper Roo'){
    hammerHeadCharacters.forEach(function(shark1){
        console.log(shark1.occupation);
        // 2 Pickerel Cola Space Truck Driver
        // 2 Hardin 37 Soldier
        console.log(shark1.name);
        // Hammerhead
        // Taylor
        // Wibaux
        // Harvey
    });
}

if (crashBandicoot[1] == 'Cortex'){
    cortex.friends.forEach(function(cortex1){
        console.log(cortex1);
        // N. Ginn
        // Dingodile
        // Tiny Tiger
        // Nitrous Oxide
    })
}

if (cortex.friends[3] == 'Nitrous Oxide'){
    let cortex2 = cortex.friends.map(function(cortex3){
        return cortex3;
    });
    console.log(cortex2);
    // ["N. Ginn", "Dingodile", "Tiny Tiger", "Nitrous Oxide"]
}

console.log(cortex.friends[2]);
// Tiny Tiger

if (cortex.friends[2] == 'Tiny Tiger'){
     frogNo.map(function(frog1){
         console.log(frog1);
         // 1
         // 2
         // 4
         // 5
         // 9
         // 12
         // 16
         // 21
         // 24
         // 25
         // 36
    })
}

if (cortex.friends[1] == 'Dingodile'){
    let dingo1 = cortex.friends.forEach(function(dingo2){
        return dingo2;
    })
    console.log(dingo1);
    // undefined
    // forEach comes backas undefined when assigned to a variable
}

console.log(troutNo[0]);
// 37

if (troutNo[0] === 37){
    let sharkName = hammerHeadCharacters.filter(function(shark1){
        return shark1.name === 'Hammerhead';
    }).map(function(shark2){
        return shark2.name;
    })
    console.log(sharkName);
    // ['Hammerhead']
}

console.log(troutNo[1]);
// 44

if (troutNo[1] == '44'){
    let crash1 = crashBandicoot.filter(function(crash2){
        return crash2 === 'Crash Bandicoot';
    });
    console.log(crash1);
    // ['Crash Bandicoot']
    // filter great for isolating certain elements
}

console.log(troutNo[2]);
// 29

if (troutNo[2] === 29){
    let robot1 = robots.filter(function(robot2){
        return robot2 === 'Mellon-Tech' || 'Hank-44';
        // For some reason this returns all of the robots 
        // of the robots array
    })
    console.log(robot1);
}

if (robots[2] == 'Mellon-Tech'){
    let shark1 = hammerHeadCharacters.filter(function(shark2){
        return shark2.name === 'Wibaux';
    }).map(function(shark3){
        return shark3.name;
    })
    console.log(shark1);
    // ['Wibaux']

}

if (robots[3] == 'Eggplant-Head'){
    let robot1 = robots.filter(function(robot2){
        return robot2 == 'Mellon-Tech';
    })
    console.log(robot1);
}

if (hammerHead[0] == 'Hammerhead'){
    let shark1 = hammerHeadCharacters.filter(function(shark2){
        return shark2.name == 'Wibaux';
    }).map(function(shark3){
        return shark3.name;
    });
    console.log(shark1);
    // ['Wibaux']
}

console.log(hammerHead[4]);
// Wibaux

if (hammerHead[4] == 'Wibaux'){
    let shark1 = hammerHeadCharacters.filter(function(shark2){
        return shark2.occupation == 'Hardin-37 Soldier';
    }).map(function(shark3){
        return shark3.name;
    });
    console.log(shark1);
    // ['Wibaux', 'Harvey']
}

if (crashBandicoot[1] == 'Cortex'){
    robots.forEach(function(robot1){
       console.log(robot1);
       // Hank-44
       // Warren-21
       // Mellon-Tech
       // Eggplant-Head
    })
}

console.log(crashBandicoot[3]);
// Spyro

if (crashBandicoot[3] == 'Spyro'){
    robots.forEach(function(robot1){
        if (robot1 == 'Mellon-Tech'){
            console.log(robot1);
            // Mellon-Tech
        }
    })
}

console.log(crashBandicoot[4]);
// Dingodile

if (crashBandicoot[4] == 'Dingodile'){
    crashBandicoot.map(function(crash1){
        console.log(crash1);
        // Crash Bandicoot
        // Cortex
        // Ripper Roo
        // Spyro
        // Dingodile
        // Tiny Tiger
        // Crunch Bandicoot
        // N. Ginn

    });
}

if (crashBandicoot[4] == 'Dingodile'){
    let crash1 = crashBandicoot.map(function(crash2){
        return crash2;
    })
    console.log(crash1);
    // returns an array of the Crash Bandicoot characters
}

if (crashBandicoot[0] == 'Crash Bandicoot'){
    let crash1 = crashBandicoot.forEach(function(crash2){
        return crash2;
    });
    console.log(crash1);
    // when we assign forEach operation to a variable
    // it comes back as undefined to the console
}

console.log(crashBandicoot[5]);
// Tiny Tiger

if (crashBandicoot[5] == 'Tiny Tiger'){
    let tiny1 = bandicoot.friends.filter(function(tiny2){
        if (tiny2 == 'Spyro'){
            return tiny2;
        }
    })
    console.log(tiny1);
    // ['Spyro']

}



console.log(hammerHeadCharacters);

if (hammerHead[5] == 'The Cosmic Trout'){
    let shark1 = hammerHeadCharacters.filter(function(shark2){
        return shark2.occupation == 'Pickerel Cola Space Truck Driver';
    }).map(function(shark3){
        return shark3.name;
    })
    console.log(shark1);
    // ['Hammerhead', 'Taylor']

}

console.log(hammerHead[3]);
// Harvey

if (hammerHead[3] == 'Harvey'){
    let fish1 = hammerHeadCharacters.filter(function(fish2){
        return fish2.species == 'Whitefish';

    }).map(function(fish3){
        return fish3.species;
    })
    console.log(fish1);
    // ['Whitefish']
}

if (robots[1] == 'Warren-21'){
    hammerHeadCharacters.filter(function(shark1){
        console.log(shark1.name == 'Hammerhead');
        // returned 1 true and 3 false

    });
}

if (robots[0] == 'Hank-44'){
   let shark1 = hammerHeadCharacters.filter(function(shark2){
       return shark2.hasPickerelCola === true;
   }).map(function(shark3){
       return shark3.name;
   });
   console.log(shark1);
   // ['Hammerhead', 'Taylor']
}

console.log(cortex.friends);
// N. Ginn
// Dingodile
// Tiny Tiger
// Nitrous Oxide

if (cortex.friends[3] == 'Nitrous Oxide'){
     hammerHeadCharacters.map(function(shark2){
         console.log(shark2);

    })
}

if (cortex.friends[1] == 'Dingodile'){
    let shark1 = hammerHeadCharacters.filter(function(shark2){
        return shark2.name == 'Taylor';
    }).map(function(shark3){
        return shark3.name;
    })
    console.log(shark1);
    // ['Taylor']
}

console.log(cortex.friends[2]);
// Tiny Tiger

if (cortex.friends[2] == 'Tiny Tiger'){
    let tiny1 = cortex.friends.filter(function(tiny2){
        return tiny2 == 'Tiny Tiger';
    }).map(function(tiny3){
        return tiny3;
    });
    console.log(tiny1);
    // ['Tiny Tiger']
}

console.log('hello');

console.log(bandicoot.friends);
// ['Spyro', 'Coco', 'Shifty', 'King Chicken']

console.log(bandicoot.friends[3]);
// King Chicken

if (bandicoot.friends[3] == 'King Chicken'){
    bandicoot.friends.map(function(chicken1){
        console.log(chicken1);
        // Spyro
        // Coco
        // Shifty
        // King Chicken
    })
}

if (bandicoot.friends[2] == 'Shifty'){
    let crash1 = bandicoot.friends.map(function(crash2){
        return crash2;
    })
    console.log(crash1);
    // ['Spyro', 'Coco', 'Shifty', 'King Chicken']
}

if (hammerHead[0] == 'Hammerhead'){
    const num2 = frogNo[3] > 10 ? 'red' : 'blue';
    console.log(num2);
    // blue
    // evaluated to false so 'blue' is printed to the console
    switch(num2) {
        case 'red':
            console.log('color is red');
            break;
        case 'blue':
            console.log('color is blue');
            break;
        default:
            console.log('color is not red or blue');
            break;
            // color is blue
    }

}

if (hammerHead[1] == 'Geometry Man'){
    const hh1 = hammerHead[0] == 'Hammerhead' ? 'This is Hammerhead' : 'This is not Hammerhead';
    console.log(hh1);
    // This is Hammerhead

    const hh2 = hammerHead[1] == 'Geometry Man' ? 'yes GM' : 'No GM';
    console.log(hh2);
    // yes GM

}

if (hammerHead[2] == 'Taylor'){
    for (let hh1 = 0; hh1 < hammerHead.length; hh1++){
        let shark1 = hammerHead[hh1];
        switch(shark1){
            case 'Hammerhead':
                console.log('Hi, Hammerhead!');
                break;
            case 'Wibaux':
                console.log('Hi, Wibaux!');
                break;
            default:
                console.log("You're Awesome!");
                break;
                // Hi, Hammerhead!
                // You're Awesome!
                // You're Awesome!
                // You're Awesome!
                // Hi, Wibaux!
                // You're Awesome!
        }
    }

}

if (robots.length == '4'){
    for (let r1 = 0; r1 < robots.length; r1++){
        let robot1 = robots[r1];
        switch(robot1){
            case 'Hank-44':
                console.log('Hi, Hank-44!');
                break;
            case 'Warren-21':
                console.log('Hi, Warren-21!');
                break;
            case 'Mellon-Tech':
                console.log('Hi, Mellon-Tech!');
                break;
            case 'Eggplant-Head':
                console.log('Hi, Eggplant-Head!');
                break;
        }
    }

}

console.log(troutNo[0]);
// 37

console.log(troutNo[0] == '37');
// true

console.log(troutNo[0] === 37);
// true

console.log(troutNo[0] === '37');
// false

if (robots[2] == 'Mellon-Tech'){
    let r1 = robots[2] == 'Mellon-Tech' ? true : false;
    console.log(r1);
    // true
    r1 = robots[0] == 'Hank-44' ? true : false;
    console.log(r1);
    // true
    r1 = robots[1] == 'Warren-21' ? true : false;
    // true
    r1 = robots[1];
    switch(r1){
        case 'Hank-44':
            console.log('Nice curling, Hank-44!');
            break;
        case 'Warren-21':
            console.log('Great Brisket making, Warren-21!');
            break;
            // Great Brisket making, Warren-21!
    }
}

console.log(typeof(hammerHead[0]));
// string

if (robots[1] == 'Warren-21'){
    let hh1 = typeof(hammerHead[0]) == String ? true : false;
    console.log(hh1);
    // false!?

    let hh2 = hammerHead[0] == 'Hammerhead' ? true : false;
    console.log(hh2);
    // true
}

console.log(frogNo[4]);
// 9
console.log(frogNo[4] == '9');
// true

if (frogNo[4] == '9'){
    for (let frog1 = 0; frog1 < frogNo.length; frog1++){
        let frog2 = frogNo[frog1];
        console.log(frog2);
        switch(frog2){
            case frog2 % 2 == 0:
                console.log(`${frog2} is a even number.`);
                // doesn't log
                break;
            case frog2 % 2 != 0:
                console.log(`${frog2} is an odd number.`);
                // doesn't log
            case 1:
                console.log(`Hello Moto`);
                // Hello Moto
            case 36:
                console.log(`36 is awesome`);
                // 36 is awesome
        }
    }
}

function printString(string1 = 'Bodhi!'){
    console.log(string1);
}

printString();
// Bodhi!

printString('Lake Cushetunk');
// Lake Cushetunk

printString('Big Carp live in Lake Cushetunk');
// Big Car live in Lake Cushetunk

function powerOf2(num = 2){
    console.log(Math.pow(num, 2));
}

powerOf2();
// 4

powerOf2(2);
// 4

powerOf2(3);
// 9

powerOf2(21);
// 441

powerOf2(37);
// 1369

function squareRoot(num = 9){
    let sq1 = Math.sqrt(num);
    console.log(`The square root of ${num} is ${sq1}.`);
}

squareRoot();
// The square root of 9 is 3.

squareRoot(21);
// The square root of 21 is 4.583.

squareRoot(36);
// The square root of 36 is 6.

let  product1 = (num1 = 9, num2 = 10) => num1 * num2;

console.log(product1());
// 90
console.log(product1(3, 4));
// 12
console.log(product1(5, 6));
// 30
console.log(product1(7, 6));
// 42

let string1 = () => 'JavaScript is Awesome!';
// anonymous function

console.log(string1());
// JavaScript is Awesome!

string1 = () => 'React is Awesome!';
console.log(string1());
// React is Awesome!

string1 = () => 'Node is cool!';
console.log(string1());

string1 = () => 37;
console.log(string1());
// 37

let product2 = (num1 = 2, num2 = 3) => num1 * num2;

let product3 = (num1 = 2, num2 = 3) => product2(num1, num2);

console.log(product3());

console.log(product3(9, 3));
// 27

console.log(product3(11, 4));
// 44

console.log(product3(.5, 44));
// 22

let numSquared = (num1 = 5) => Math.pow(num1, 2);
console.log(numSquared());
// 25

console.log(numSquared(9));
// 81

console.log(`${numSquared(10)} is the output.`);
// 100 is the output

if (robots[2] == 'Mellon-Tech'){
    let robot1 = robots.map(function(robot2){
        return robot2;
    })
    console.log(robot1);
    // ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head']
}

if (robots[3] == 'Eggplant-Head'){
    cortex.friends.forEach(function(cortex1){
        console.log(cortex1);
        // N. Ginn
        // Dingodile
        // Tiny Tiger
        // Nitrous Oxide
    })
}

if (cortex.friends == 'Dingodile'){
    let cortex1 = cortex.friends.forEach(function(cortex2){
        return cortex2;
    })
    console.log(cortex1);
    // No return
}

console.log(hammerHeadCharacters[1].name == 'Hammerhead');
// false
console.log(hammerHeadCharacters[0].name == 'Hammerhead');
// true
console.log(hammerHeadCharacters[0]);

console.log(robotCharacters);

if (robotCharacters[0].name == 'Hank-44'){
    let robot1 = robotCharacters.filter(function(robot2){
        return robot2.paintColor == 'Gray';
    }).map(function(robot3){
        return robot3.name;
    })
    console.log(robot1);
    // ['Hank-44', 'Warren-21']

}

if (robotCharacters[2].paintColor == "Yellow and Green"){
    let robot1 = robotCharacters.filter(function(robot2){
        return robot2.city == 'Bridgewater, New Jersey';
    }).map(function(robot3){
        return robot3.name;
    })
    console.log(robot1);
    // ['Mellon-Tech', 'Eggplant-Head']
}

function roboGreeting(string1 = 'Robo-Tron'){
    switch(string1){
        case 'Hank-44':
            console.log(`Hi, ${string1} ...1`);
            break;
        case 'Warren-21':
            console.log(`Hi, ${string1} ...2`);
            break;
        case 'Mellon-Tech':
            console.log(`Hi, ${string1} ...3`);
            break;
        case 'Eggplant-Head':
            console.log(`Hi, ${string1} ...4`)
            break;
        default:
            console.log(`Hi, ${string1} ...5`)
            break;
            
    }
}

roboGreeting();
// Hi, Robo-Tron ...5
roboGreeting('Hank-44');
// Hi, Hank-44 ...1
roboGreeting('Warren-21');
// Hi, Warren-21 ...2
roboGreeting('Mellon-Tech');
// Hi, Mellon-Tech ...3
roboGreeting('Eggplant-Head');
// Hi, Eggplant-Head ...4

let numCubed = (num1 = 3) => Math.pow(num1, 3);

console.log(numCubed());
// 27

console.log(numCubed(4));
// 64

console.log(numCubed(5));
// 125

console.log(numCubed(6));
// 216

console.log(numCubed(7));
// 343

console.log(numCubed(8));
// 512

console.log(numCubed(9));
// 729

console.log(numCubed(10));
// 1000

console.log(numCubed(11));
// 1331

numCubed = (num1 = 3) => console.log(Math.pow(num1, 3));

numCubed();
// 27

numCubed(2);
// 8

numCubed(.5);
// 0.125

console.log(Math.max(3, 3));
// 3

let maxNumber = (num1 = 0, num2 = 0) => console.log(`${Math.max(num1, num2)}
is the bigger number.`);

maxNumber();
// 0 is the bigger number

maxNumber(2, 3);
// 3 is the bigger number

// maxNumbers('2', 7);
// errored out with string

function evenNumberTest(num1 = 2){
    if (num1 % 2 == 0){
        console.log(`${num1} is an even number.`);
    }
    else
        console.log(`${num1} is an odd number.`);
}

evenNumberTest();
// 2 is an even number.

evenNumberTest(9);
// 9 is an odd number.

evenNumberTest(10);
// 10 is an odd number.

let hh3 = 91;

console.log(hh3 % 10);
// 1
console.log(hh3);
// 91

console.log(hh3 / 10);
// 9.1

console.log(9.1 / 10);
// .91

evenNumberTest(21);
// 21 is an odd number.

evenNumberTest(37);
// 37 is an odd number


if(robotCharacters[1].paintColor == 'Gray'){
    for (let hh1 = 0; hh1 < robotCharacters.length; hh1++){
         let hh2 = robotCharacters[hh1].name.charAt(0);
         console.log(hh2);
         // H
         // W
         // M
         // E
         
    }
}

console.log(robots[2].indexOf('Tech'));
// 7
console.log(robots[2].substring(0, robots[2].length));
// Mellon-Tech
console.log(robots[2].substring(0, robots[2].length - 1));
// Mellon-Tec

const there1 = ['there', 'therefore', 'theranos'];




console.log('Timber-Tron'.indexOf('Timber') == 0);
// true

if (crashBandicoot[0] == 'Crash Bandicoot'){
    let crash2 = 'Crash Bandicoot';
    let crash1 = 'Crash';
    while (crash1.indexOf(crash2) != 0){
           crash2 = crash2.substring(0, crash2.length - 1);

    }
    console.log(crash2);
}

console.log(cortex.friends[1]);
// Dingodile
console.log(there1[0]);
// there

if(cortex.friends[1] == 'Dingodile'){
    let prefix = there1[0];
    for (let hh1 = 1; hh1 < there1.length; hh1++){
        let hh2 = there1[hh1];
        while (hh2.indexOf(prefix) != 0){
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length == 0) console.log('No Common Prefix');
        }
    }
    console.log(prefix);
    // ther
}

function longestCommonPrefix(array1){
    if (array1.length == 0) console.log(`${array1} is empty.`)
    let prefix = array1[0];
    for (let hh1 = 1; hh1 < array1.length; hh1++){
        let hh2 = array1[hh1];
        while (hh2.indexOf(prefix) != 0){
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length == 0) console.log('no common prefix');
        }
    }
    console.log(prefix);
}

longestCommonPrefix(there1);
// ther
longestCommonPrefix(timberTron);
// Timber
longestCommonPrefix(emptyArray);
// is empty.
longestCommonPrefix(robots);
// no common prefix

if (robotCharacters[1].paintColor == 'Gray'){
    let robot1 = robotCharacters.filter(function(robot2){
        return robot2.city == 'Bridgewater, New Jersey';
    }).map(function(robot3){
        return robot3.name;
    })
    console.log(robot1);
    // ['Mellon-Tech', 'Eggplant-Head']
}

console.log(robotCharacters[3].paintColor);
// Light Blue and Orange

if (robotCharacters[3].paintColor == 'Light Blue and Orange'){
    let string1 = 'racecar'
    let string2 = 0;
    // first index of string
    let string3 = string1.length - 1;
    // last index of string
    for (; string2 < string3; string2++, string3--){
        if (string1.charAt(string2++) != string1.charAt(string3--)){
            console.log(`${string1} is not a palindrome.`);
        }
        else
            console.log(`${string1} is a palindrome`);
    }
    // racecare is a palindrome
}

function isPalindrome(stringParam =''){
    stringParam = stringParam.toLowerCase();
    index1 = 0;
    // first index of string
    index2 = stringParam.length - 1;
    // last index of string
    for (; index1 < index2; index1++, index2--){
        if (stringParam.charAt(index1++) != stringParam.charAt(index2--)){
            console.log(`${stringParam} is not palindrome.`);
        }
        else
            console.log(`${stringParam} is a palindrome.`);
    }
}

isPalindrome('kayak');
// kayak is a palindrome
isPalindrome('Bodhi');
// Bodhi is not a palindrome
isPalindrome('Kayak');
// kayak is a palindrome
isPalindrome('ribbon');
// ribbon is not a palindrome
// ribbon is a palindrome
// will have to look into this
isPalindrome('RoGue');
// rogue is not a palindrome
isPalindrome('timber');

if (robotCharacters[2].paintColor == 'Yellow and Green'){
    let hh1 = 0;
    while (hh1 < robotCharacters.length){
        console.log(robotCharacters[hh1].model);
        hh1++;
    }
    // CurlerTron-4000
    // Bend-O-Matic 2100
    // Fuzz-Borg 7600
    // Distortion-Wave 2029
}

if (robotCharacters[3].paintColor == 'Light Blue and Orange'){
    let hh1 = robotCharacters.length - 1;
    do{
        console.log(robotCharacters[hh1].paintColor);
        hh1--;
    }while(hh1 >= 0);
    // Light Blue and Orange
    // Yelloe and Green
    // 2 Gray
}

if (cortex.friends[0] == 'N. Ginn'){
    let robot1 = robots.map(function(robot2){
        return robot2;
    })
    console.log(robot1);
    // ['Hank-44', 'Warren-21', 'Mellon-Tech','Eggplant-Head']
}

if (cortex.friends[1] == 'Dingodile'){
    robots.map(function(robot2){
        console.log(robot2);
        // Hank-44
        // Warren-21
        // Mellon-Tech
        // Eggplant-Head
    })
}

console.log(bandicoot.friends);
// ['Spyro', 'Coco', 'Shifty', 'King Chicken']

if (bandicoot.friends[3] === 'King Chicken'){
    let crash1 = bandicoot.friends.filter(function(crash2){
        return crash2 == 'King Chicken';
    }).map(function(crash3){
        return crash3;
    })
    console.log(crash1);
    // ['King Chicken']
    
}

console.log(bandicoot);
console.log(bandicoot.species);
// Bandicoot

let sum2 = (num1 = 6, num2 = 5) => console.log(num1 + num2);

sum2();
// 11
sum2(4);
// 9
sum2(3, 4);
// 7

console.log(cortex.friends[1]);

if (cortex.friends[1] == 'Dingodile'){
    let crash1 = cortex.friends.sort(function(crash2){
          return crash2;
    })
    console.log(crash1);
    // ['N. Ginn', 'Dingodile', 'Tiny Tiger', 'Nitrous Oxide']
}

console.log(cortex.friends.sort());
// ['Dingodile', 'N. Ginn', 'Nitrous Oxide', 'Tiny Tiger']
console.log(robots.sort());
// ['Eggplant-Head', 'Hank-44', 'Mellon-Tech', 'Warren-21']
console.log(robots[2]);
// Mellon-Tech

// let sortMachine = (string1, string2) => console.log(sort(string1, string2));

// sortMachine('orange', 'apple')

console.log(robots.includes('Mellon-Tech'));
// true
console.log(robots.includes('Bender'));
// false
console.log(robots.concat(1, 2));
// interesting, it added 1 and 2 to the array as elements
// ['Eggplant-Head', 'Hank-44', 'Mellon-Tech, 'Warren-21, 1, 2]
console.log(robots);
// ['Eggplant-Head', 'Hank-44', 'Mellon-Tech', 'Warren-21']
console.log(robots.indexOf('Hank-44'));
// 1
console.log(robots.pop(robots[3]));
// Warren-21
console.log(robots);
// ['Eggplant-Head', 'Hank-44', 'Mellon-Tech']
// Warren-21 removed from array
robots.push('Warren-21');
console.log(robots);
// ['Eggplant-Head', 'Hank-44', 'Mellon-Tech', 'Warren-21']

if (crashBandicoot[2] == 'Ripper Roo'){
    let numbers = [1, 2, 3, 4];
    let numbers3 = [];
    console.log(numbers);
    // [1, 2, 3, 4]
    for (let hh1 = numbers.length - 1; hh1 >= 0; hh1--){
        
        numbers.pop(numbers[hh1]);
        numbers3.push(numbers[hh1]);
        
    }
    console.log(numbers3);
    // [undefined, undefined, undefined, undefined]
}

if (bandicoot.friends[0] == 'Spyro'){
    console.log(bandicoot.friends);
    console.log(bandicoot.friends.length - 1);
    // 3
    for (let hh1 = bandicoot.friends.length - 1; hh1 >= 0; hh1--){
        bandicoot.friends.pop(bandicoot.friends[hh1]);
        bandicoot.friends.push(bandicoot.friends[hh1]);
    }
    console.log(bandicoot.friends);
    // ['Spyro, 'Coco', 'Shifty', 'Spyro']
}

console.log(bandicoot.friends);
// ['Spyro, 'Coco', 'Shifty', 'Spyro']
bandicoot.friends.pop(bandicoot.friends[3]);
bandicoot.friends.push('King Chicken');
console.log(bandicoot.friends);
// ['Spyro, 'Coco', 'Shifty', 'King Chicken']
console.log(bandicoot.friends.reverse());
// ['King Chicken', 'Shifty', 'Coco', 'Spyro']

let string44 = 'X-Men';
let xMen = string44.split('');
console.log(xMen);
// ['X', '-', 'M', 'e', 'n']
xMen = xMen.reverse();
console.log(xMen);
// ['n', 'e', 'M', '-', 'X']
xMen = xMen.join('');
console.log(xMen);
// neM-X

function reverseString(string1 = 'Chipper'){
    string1 = string1.split('');
    string1 = string1.reverse();
    string1 = string1.join('');
    console.log(string1);
}

reverseString();
// reppihC
reverseString('Beezer');
// rezeeB
reverseString('Bodhi');
// ihdoB

console.log(robots[2]);
// Mellon-Tech

if(robots[2] == 'Mellon-Tech'){
    for (let hh1 = 0; hh1 < robots.length; hh1++){
         
        console.log(reverseString(robots[hh1]));
        // daeH-tnalpggE
        // undefined
        // 44-knaH
        // undefined
        // hceT-nolleM
        // undefined
        // 12-nerraW
    }
}

console.log(robots[2].length);
// 11

console.log(cortex.friends);

if (cortex.friends[3] == 'Tiny Tiger'){
    let hh1 = 0;
    while(hh1 < cortex.friends.length){
        console.log(cortex.friends[hh1]);
        hh1++;
        // Dingodile
        // N. Ginn
        // Nitrous Oxide
        // Tiny Tiger
    }
}

if (cortex.friends[2] == 'Nitrous Oxide'){
    let cortex1 = cortex.friends.filter(function(cortex2){
        return cortex2 == 'Nitrous Oxide';
    }).map(function(cortex3){
        return cortex3;
    })
    console.log(cortex1);
    // ['Nitrous Oxide']
}

console.log(cortex.friends.length);
// 4

console.log(cortex.friends[2].length);
// 13

if (cortex.friends[2].length === 13){
    let nitrousOxide = cortex.friends[2];
    nitrousOxide = nitrousOxide.split('');
    console.log(nitrousOxide);
    // ['N', 'i', 't', 'r', 'o', 'u', 's', ' ', 'O', 'x', 'i', 'd', 'e']
    nitrousOxide = nitrousOxide.reverse();
    console.log(nitrousOxide);
    // ['e', 'd', 'i', 'x', 'O', ' ', 's', 'u', 'o', 'r', 't', 'i', 'N']
    nitrousOxide = nitrousOxide.join('');
    console.log(nitrousOxide);
    // edixO suortiN
}










