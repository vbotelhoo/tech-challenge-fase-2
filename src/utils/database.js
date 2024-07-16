import mongoose, { mongo } from "mongoose";
import '../../dotenv-config.js'

const uri = process.env.DB_URL;
const databaseConnection = async () => {
    if (!global.mongoose){
        mongoose.set('strictQuery', false),
        global.mongoose = await mongoose.connect(uri);
    }
}

export default databaseConnection