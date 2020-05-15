// Create a function with a greeting, business name, using
// Magical Guitars.Com as the business name, option to greet and obtain customer Contact details.
// what is the customer trad in/expecting - new model guitar or $$ value for trading item.



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
    myName = await askQuestion ("Please enter your name;")
}

Program().then(() => {
    process.exit(0);
});

