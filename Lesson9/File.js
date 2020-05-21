const fs = require("fs");
const path = require("path");

fs.writeFileSync(path.join(__dirname, "MyFile.txt"), "HelloWorld");
let MyText = fs.readFileSync(path.join(__dirname, "MyFile.txt"));
console.log(MyText.toString());
