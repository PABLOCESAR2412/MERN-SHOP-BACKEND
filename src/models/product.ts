import mongoose from 'mongoose';
import{Categoria} from './categoria';

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    descripcion: {
        type: String,
        default: ''
    },
    richDescripcion: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    images: {
        type: String,
        default: ''
    },
    brand: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: ''
    },
    category: {
        type: Categoria,
        default: ''
    },
    countlnStock: {
        type: Number,
        default: ''
    },
    rating: {
        type: Number,
        default: ''
    },
    isFeatured: {
        type: Boolean,
        default: ''
    },
    dataCreate: {
        type: Date,
        default: ''
    }
});

export const Product = mongoose.model('Product', productSchema);