import databaseConnection from '../utils/database.js';
import Book from '../models/book.js';

export const listBook = async () => {
    await databaseConnection();
    const books = await Book.find();
    return books;
}

export const listBookById = async(id) => {
    await databaseConnection();
    const book = await Book.findById(id);
    return book;
}

export const createBook = async (book) => {
    await databaseConnection();
    const createBook = await Book.create(book);
    return createBook;
}

export const deleteBook = async (id) => {
    await databaseConnection();
    await Book.findByIdAndDelete(id);
}

export const updateBook = async (id, newBody) => {
    await databaseConnection();
    await Book.findByIdAndUpdate(id, newBody);
}