const fs = require("fs");

//fs.appendFileSync("./read.txt", new Date().toLocaleString());

//fs.appendFileSync("./read.txt",'Hello this is the append.\n');


//fs.appendFileSync("./read.txt", `${Date.now()} With Date Hello this is the append.\n`);

//fs.cpSync("./read.txt","./copy.txt");           //  copy of a file
//fs.unlinkSync("./copt.txt");           // delete a file 

//console.log(fs.statSync("./read.txt"));         // read stats 

//fs.mkdirSync('my-docs') // make a  directory

//fs.mkdirSync('my-docs/apple') // make a  directory with sub folder
fs.mkdirSync('my-docs/subfolder') // make a  directory with sub folder

