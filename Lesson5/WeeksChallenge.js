// Create a function with a greeting, business name, 
// Using Magical Guitars.Com as the business name, option to greet and obtain customer Contact details.
// what is the customer tradein/expecting - new model guitar or $$ value for trading item.



const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // Your Code Here... 
    console.log("HelloWorld");
    console.log("Magical Guitars.Com");
    let myName = "Magical Guitars.Com";
    console.log(myName);
    myName = await askQuestion ("Please enter your name;");
    let myGuitar = await askQuestion ("Guitar Make Trading;");
    let ShouldUpgrade = await askQuestion ("Up grade new model Yes/No;");
    myValue = await askQuestion ("Trade In Value $$;");
    myGuitar = await askQuestion ("Fender Strat/Taylor");    
    myValue = await askQuestion ("Price $5000 - Trade in Value $$");
    console.log("Thank you for visiting Magical Guitars.Com");
   
}

Program().then(() => {
    process.exit(0);
});

