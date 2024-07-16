import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    titulo: { type: String, require: true },
    autor: { type: String, require: true },
    editora: { type: String, require: true }
});

export default mongoose.models.Book || mongoose.model('Book', BookSchema);