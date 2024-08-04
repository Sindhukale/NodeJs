const myhttp = require("http");
const server=myhttp.createServer((req,res)=>
{
    res.end("hello form server side:SIN");
})
server.listen(9000,"127.0.0.1",()=>{
    console.log("Listening on port 9000:SIN");
})