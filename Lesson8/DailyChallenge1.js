// Go through the work for the Array Extension questions from Week 1 Day 4 and convert all the callback 
// functions to arrow functions. Do the same for all the String Extension Method Questions from Week 1 Day 5. 
// My links to these exercises are below:

let pets = [
    {
        name: "Tonto",
        age: 4,
        ownerName: "Glen"
    }, {
        name: "Spot",
        age: 7,
        ownerName: "Jade"
    }, {
        name: "Scooby",
        age: 3,
        ownerName: "Shaggy"
    }, {
        name: "Lucky",
        age: 1,
        ownerName: "Luke"
    }, {
        name: "Sadie",
        age: 3,
        ownerName: "Daniel"
    }, {
        name: "Duke",
        age: 5,
        ownerName: "Sabine"
    }
];

// 1 Use the Array.filter function to create an array of all the pets owned by Luke.

function ownedByGlen(pet) {
    return pet.ownerName == "Glen";
}

let glensPets = pets.filter(pet => pet.ownerName == "Glen");

console.log(glensPets);

// 2 Use the Array.map function to create an array of all the names of the owners.

function getOwner(pet) {
    return pet.ownerName;
}

let owners = pets.map(pet => pet.ownerName);

console.log(owners);

// 3 Use the Array.find function to retrieve the pet owned by Shaggy
function findShaggysPet(pet) {
    return pet.ownerName == "Shaggy";
}

let shaggysPet = pets.find(pet => pet.ownerName == "Shaggy");
console.log(shaggysPet);

// 4 Use the Array.filter function to create an array of all the pets that are less than 5 years old and that have either a pet or owner name that starts with "S"



const filterCallback = pet => {
    let lessThan5 = pet.age < 5;
    let hasS = pet.name[0] == "S" || pet.ownerName[0] == "S";
    return lessThan5 && (hasS);
}

let filteredPets = pets
    .filter(pet => pet.age < 5)
    .filter(pet => pet.name[0] == "S" || pet.ownerName[0] == "S");
console.log(filteredPets);

