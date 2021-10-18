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