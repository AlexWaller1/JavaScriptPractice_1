console.log("Greetings, Mars.");

const robots = ['Hank-44', 'Warren-21', 'Mellon-Tech',
'Eggplant-Head'];

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
        occupation:'Hardin-37',
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

// forEach cannot return anything as anytime we try to assign it
// to a variable to log to the console it comes back as undefined
