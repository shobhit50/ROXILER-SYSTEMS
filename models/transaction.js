import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String, required: true },
    image: { type: String },
    sold: { type: Boolean, default: false },
    dateOfSale: { type: Date },
});

export default mongoose.model('Transaction', transactionSchema);