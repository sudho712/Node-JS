const fs =require("fs");
//sync
//fs.writeFileSync('../test.txt','hello this is the file handling..');

//async
fs.writeFile('../test.txt','hello this is the file handling and error..',(err)=>{});