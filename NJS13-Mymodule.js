//require the http module
var http = require('http');
//require your custom mdule
var dt=require('./myModule');
//create an http server
http.createServer(function (req,res) {
    //set the response heater
    res.writeHead(200,{'Content-Type':'text/html'});
    //use the custom module to get the data and time 
    res.write("The date and time is currently:"+dt.myDateTime());
    //end of response
    res.end();
}).listen(7000);//sever listens on port 8000