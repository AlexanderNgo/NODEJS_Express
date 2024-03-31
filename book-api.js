// book-api.js

const express = require('express');
const router = express.Router();

// Middleware pour le corps de la requête
router.use(express.json());

// Array pour simuler une base de données de livres
let books = [];

// Route pour récupérer tous les livres
router.get('/books/read', (req, res) => {
    // Générer la structure HTML du tableau
    //console.log(books);
    let htmlTable = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Liste des livres</title>
        </head>
        <body>
            <h1>Liste des livres</h1>
            <table>
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Published Date</th>
                        <th>Publisher</th>
                        <th>NbPages</th>
                    </tr>
                </thead>
                <tbody>
    `;

    // Ajouter chaque livre au tableau HTML
    books.forEach(book => {
        htmlTable += `
            <tr>
                <td>${book.ISBN}</td>
                <td>${book.title}</td>
                <td>${book.Author}</td>
                <td>${book.Publisheddate}</td>
                <td>${book.Publisher}</td>
                <td>${book.NumberOfPages}</td>
            </tr>
        `;
    });

    // Terminer le tableau HTML et envoyer la réponse
    htmlTable += `
                </tbody>
            </table>
        </body>
        </html>
    `;
    
    // Envoyer la page HTML en réponse
    res.send(htmlTable);
});

// Route pour ajouter un nouveau livre
router.post('/books', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.sendStatus(201); // Répondre avec le code 201 (Created)
    console.log(req.body);
});
//pour supprimer
router.post('/books/delete',(req,res)=>{
    console.log("DANS DELETE");
    console.log(req.body); // TO DO PROBLEM ICI CAR JE RECOIS PAS LES INFORMATIONS DU CHAMPS ISBN
    //A TRAITER = REGARDER LE ISBN A SUPPRIMER DANS BOOKS 
    res.sendStatus(201);
})

router.put('/books/update',(req,res)=>{
    //console.log("DANS UPDATE");
    //console.log(typeof(req.body));
    var ISBN = req.body.ISBN; // Supposons que la clé ISBN est directement dans req.body
    var dedans = false;
    
    books.forEach((book, index) => {
        if (book.ISBN === ISBN) {
            dedans = true;
            books[index] = req.body; // Remplacer le livre existant par les nouvelles données
            return; // Sortir de la boucle forEach une fois le livre trouvé et mis à jour
        }
    });
    
    if (dedans) {
        console.log("ISBN trouvé et mis à jour dans books !");
        console.log(req.body);
    } else {
        console.log("ISBN non trouvé dans books !");
    }
    
    res.sendStatus(201);
})
// Exporter le routeur
module.exports = router;
