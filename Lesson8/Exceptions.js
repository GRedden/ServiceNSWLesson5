function addNumbers(num1, num2){
    if(isNaN(num1)){
        throw new Error("num1 must be a number");
    }
    if(isNaN(num2)){
        throw new Error("num2 must be a number");
    }
    return parseFloat(num1) + parseFloat(num2);
}



try {
    console.log(addNumbers(16.5, "a"));
} catch (err) {
    console.log(err.message);
}

console.log("This code is still running");

// Output "This code is still running"