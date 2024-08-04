const myfs=require("fs");
const mybuf_data=myfs.readFileSync("myData.txt");
console.log(mybuf_data);
console.log(mybuf_data);
const myorg_data=mybuf_data.toString();//converts the buffer data into the string data
console.log(myorg_data);