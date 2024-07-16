import { Router } from "express";
import { listBook, createBook, deleteBook, uptadeBook} from "../services/book.js";

const router = Router();

router.get('/', async (req, res) => {
    const bookList = await listBook();
    res.send(bookList);
})
    
router.post('/', async (req, res) => {
    try {
        const book = await createBook(req.body);
        res.status(201).send(book);
    } catch (err) {
        res.status(400).send(err);
    }
})

router.delete('/:bookId', async (req, res) => {
    await deleteBook(req.params.bookId);
    res.send();
})

router.put('/:bookId', async(req, res) => {
    await uptadeBook(req.params.bookId, req.body);
    res.send();
})

export default router;