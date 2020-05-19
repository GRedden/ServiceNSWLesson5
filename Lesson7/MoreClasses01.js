// Getters and Setters

class Person {
    constructor(name, age, heightInMm) {
        this.name = name;
        this.age = age;
        this.heightInMm = heightInMm;
    }

    get heightInInches() {
        return this.heightInMm / 25.4;
   }
}

let me = new Person ("Glen", 59, 1800);
console.log(me);

console.log(me.heightInInches);

console.log(me.heightInCm);

// For each instance variable, a getter method returns its value 
// while a setter method sets or updates its value. 
// Given this, getters and setters are also known as accessors and mutators, 
// respectively.

class Pet {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    } 
}
    class Dog extends Pet {
        constructor(name, age, breed) {
            super(name, age, "dog")
            this.breed = breed;

        }
    

    }

let cat = new Pet ("Felix", 2, "Cat");
let dog = new Dog ("Red", 4, "Dog", "Begale");
console.log(cat);
console.log(dog);

