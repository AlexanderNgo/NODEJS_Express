const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
//const bookRouter = require('./book-api'); // Import le routeur de book-api.js
const bookRouter = require('./book-api'); // Importe à la fois router et books

app.use(express.static(path.join(__dirname,'TD_NODEJS_EXPRESS')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
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
