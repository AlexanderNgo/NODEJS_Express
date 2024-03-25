const express = require('express');
const router = express.Router();

// Middleware pour le corps de la requête
router.use(express.json());

// Array pour simuler une base de données de livres
let books = [];

// Route pour récupérer tous les livres
router.get('/books', (req, res) => {
    res.json(books);
});

// Route pour ajouter un nouveau livre
router.post('/books', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json(newBook);
});

// Autres routes pour mettre à jour, récupérer ou supprimer des livres...


