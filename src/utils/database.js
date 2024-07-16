import mongoose, { mongo } from "mongoose";

import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const uri = process.env.DB_URL;
const databaseConnection = async () => {
    if (!global.mongoose){
        mongoose.set('strictQuery', false),
        global.mongoose = await mongoose.connect(uri);
    }
}

export default databaseConnection