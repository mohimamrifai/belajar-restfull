import express from "express";
import mongoose from 'mongoose';
import router from "./routes/index.js";

const app = express();
const URI = process.env.MONGO_URI || 'mongodb+srv://admin123:admin123@cluster0.x20floc.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('berhasil terkoneksi'));


const port = process.env.PORT || 3000


app.listen(port, () => console.log(`server is running at port http://localhost:3000`));

app.use(express.json());
app.use('/api/v1/resep', router);