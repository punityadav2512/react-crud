import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import Routes from './server/route.js';

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', Routes);


const URL = '';

const PORT = process.env.PORT || '8080';
mongoose.connect(URL).then(() => {

    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})
