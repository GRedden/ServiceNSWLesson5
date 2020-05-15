let myDog = new Object ();
 myDog = {
    name: "Rex",
    age: 6
};

console.log(myDog.name);
myDog.name = "Buffy";
console.log(myDog.name);
myDog.owner ="Glen";
console.log(myDog);

let propertyIwantToLog = "age";
console.log(myDog[propertyIwantToLog])

let human = new Object();
human = {
    name: "glen",
    age: 19
}

human.name = "trent"

console.log(human.name)


// let myDog = {};
let myDog = new Object();
let myArray = new Boolean();
console.log(myArray);
myDog.name = "Chester";
myDog.age = 2;

let car = {
    model: "MyCar",
    make: "MyMake",
    year: 2017
}

let myNames = ["Geoff", "Dave", "Eslin", "Glen", "Glen", "Steve"];

let myNameCounts = [
    {
        name: "Glen",
        count: 3
    }, {
        name: "Dave",
        count: 1
    }, {
        name: "Steve",
        count: 2
    },
];

console.log(myDog.name);
myDog.name = "Pluto";
console.log(myDog.name);
myDog.owner = "Glen";
console.log(myDog);

let propertyIWantToLog = "age";

console.log(myDog[propertyIWantToLog]);

// 5 Use string concatenation to print out a list of your hobbies in a sentence. This code should work even if you add more elements to the list. Eg. "My hobbies are painting, drawing and exercising", "My hobbies are painting, drawing, exercising and skydiving"

let hobbies = "My hobbies are";
for (let i = 0; i < me.hobbies.length; i++) {
    let hobby = me.hobbies[i];
    hobbies += hobby;
    if(i == me.hobbies.length - 2) {
        // For the second last element
        hobbies += " and ";
    } else if (i == me.hobbies.length - 1){
        // For the last element
        hobbies += ".";
    } else {
        // For all the other elements
        hobbies += ", ";
    }
}

console.log(hobbies);
// My hobbies are SkydivingCodingEatingExcersise
// My hobbies are Skydiving, Coding, Eating and Excersise


