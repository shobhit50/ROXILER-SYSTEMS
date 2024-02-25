import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import transactionRoutes from './routes/transactions.js';
import Transaction from './models/transaction.js';





main().then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/API-testing');
}
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());




async function getPosts() {
    for (let i = 0; i < data.length; i++) {
        const product = new Transaction({
            id: data[i].id,
            title: data[i].title,
            price: data[i].price,
            description: data[i].description,
            category: data[i].category,
            image: data[i].image,
            sold: data[i].sold,
            dateOfSale: data[i].dateOfSale
        });
        try {
            const savedProduct = await product.save();
            console.log(savedProduct);
        } catch (err) {
            console.log(err);
        }
    }
}

app.use('/', transactionRoutes);

const port = 3000;
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));