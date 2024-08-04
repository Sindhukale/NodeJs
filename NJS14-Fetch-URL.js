const http=require('http');
http.get('http://jsonplaceholder.typicode.com/todos/',(resp)=>{//if you type todos1 then we will get only one id
    let data='';
    //a chuck of data has been recieved
    resp.on('data',(chuck)=>
    {
        data+=chuck;
    });
    //the whole response has been recieved print out the result
    resp.on('end',()=>
    {
        console.log(JSON.parse(data));
        console.log(data);
    });
}).on("error",(err)=>
{
    console.log("Error:"+err.message);
});