
const http = require("http");
const fs=require("fs");

const myServer = http.createServer((req, res) => {
    const log=`${Date.now()}: ${req.url} new req Received\n`;
    fs.appendFile("log.txt",log,(err,data) => {

        switch(req.url)
        {
            case '/': res.end("Homepage");
            break
            case '/about' : res.end("Hello node js");
            default:
                res.end("404 not found")
        }

        console.log("New Request Received.");

    console.log("Hello from server");

    // Responding to the client
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from the server! br............");
    });

    
});

myServer.listen(3000, () => console.log("Server started on port 3000"));
