function addNumber(num1, num2) {
    console.log(num);
}

addNumbers(12, 19);

function sayHello(){
    collection.log("Hello");
}

sayHello(); {
    return addNumbers(num, num);
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

// let newNumber = addNumbers(12, 19);
// console.log(newNumber);

function sayHello(name) {
    console.log("Hello " + name);
};
// sayHello("Luke");

function multiplyByTwo(num) {
    return addNumbers(num, num);
}

// console.log(multiplyByTwo(10));


function getMe(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName: function () {
            return `${this.firstName} ${this.lastName}`;
        }
    }
}

// let someoneElse = getMe("Luke", "Parker");
// console.log(someoneElse.getFullName())

let people = [
    {
        name: "Luke",
        age: 12,
        pets: [
            {
                species: "Dog",
                name: "Rex"
            }
        ]
    },{
        name: "Dave",
        age: 17
    },{
        name: "Jim",
        age: 19
    },{
        name: "Bob",
        age: 22
    },
]

people[0].pets = [
    {
        type: "Dog",
        name: "Rex"
    },{
        type: "Cat",
        name: "TC"
    }
]

for(let i = 0; i < people[0].pets.length; i++) {
    console.log(people[0].pets[i]);
}

function agePerson(person) {
    person.age++;
}

console.log(people);

for (let i = 0; i < people.length; i++) {
    let person = people[i];
    agePerson(person);
}

console.log(people);

function logMyArray(myArray){
    for (let i = 0; i < myArray.length; i++) {
        const element = myArray[i];
        console.log(element);
    }
}

let array = ["Hello", "World"];
logMyArray(array);

logMyArray(["Hello", "World"]);



let people = [
    {
        name: "Jane",
        age: 25
    },
    {
        name: "Bob",
        age: 40
    },
    {
        name: "Dana",
        age: 46
    },
    {
        name: "Jade",
        age: 19
    },
    {
        name: "Jim",
        age: 12
    }
]

function getOldest(peopleArray){

}

getOldest(people) // Expected output: Dana

// Create a function that takes 2 arguments that are numbers and returns the largest of those numbers.
function getMaxNumber (num1, num2) {
    if (num1 > num2) { 
        return num1;
            }
            return num2;
        }

 // 4 Create a function that takes 2 arguments, name and age, and returns an object with properties name and age set to the values passed in.      

 function createPerson(name, age) {
     return {
         name: name,
         age: age
     }

    }

    let Glen = createPerson("Glen, 59");

    console.log(Glen);S

    // ctrl + shift +`