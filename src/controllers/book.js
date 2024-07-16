import { Router } from "express";
import { listBook, createBook, deleteBook, updateBook, listBookById } from "../services/book.js";

const router = Router();

// Rota para listar todos os livros
router.get('/', async (req, res) => {
    try {
        const bookList = await listBook();
        res.send(bookList);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rota para listar um livro por ID
router.get('/:bookId', async (req, res) => {
    try {
        const bookById = await listBookById(req.params.bookId);
        if (bookById) {
            res.send(bookById);
        } else {
            res.status(404).send('Livro não encontrado');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});
    
// Rota para criar um novo livro
router.post('/', async (req, res) => {
    try {
        const book = await createBook(req.body);
        res.status(201).send(book);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Rota para deletar um livro por ID
router.delete('/:bookId', async (req, res) => {
    try {
        await deleteBook(req.params.bookId);
        res.status(204).send(); // Código de status 204 para "No Content"
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Rota para atualizar um livro por ID
router.put('/:bookId', async (req, res) => {
    try {
        await updateBook(req.params.bookId, req.body);
        res.status(204).send(); // Código de status 204 para "No Content"
    } catch (err) {
        res.status(500).send(err.message);
    }
});

export default router;
