const { Console } = require("console");
const http=require("http");

const myServer=http.createServer((req, res)=>{
    console.log("new Req Rec.");
    console.log("Hello from server");

});
myServer.listen(3000,() => console.log("Server started"));