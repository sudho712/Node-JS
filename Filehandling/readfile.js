const fs =require("fs");

const result=fs.readFileSync('./read.txt','utf-8');
console.log(result);

fs.readFile('./read.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log(result);
    }
});