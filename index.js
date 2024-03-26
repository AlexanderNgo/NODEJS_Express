const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const bookRouter = require('./book-api'); // Import le routeur de book-api.js

app.use(express.static(path.join(__dirname,'TD_NODEJS_EXPRESS')));
app.use(express.json());
// Utilisation du routeur book-api.js
app.use('/', bookRouter);

app.get('/',(req,resp)=>{
    //console.log("Hello");
    //resp.send("Hello World");
    resp.sendFile(path.join(__dirname,'index.html'));
   //resp.sendFile(path.join(__dirname,'index.css'));
})
app.get('/index.css', (req, res) => {
    res.type('text/css');
    res.sendFile(path.join(__dirname, 'index.css'));
});

app.listen(port,()=>{
    console.log("Ecoute au port "+port);
})