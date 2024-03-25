const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'TD_NODEJS_EXPRESS')));

app.get('/',(req,resp)=>{
    //console.log("Hello");
    //resp.send("Hello World");
    resp.sendFile(path.join(__dirname,'index.html'));
})
app.listen(port,()=>{
    console.log("Ecoute au port "+port);
})