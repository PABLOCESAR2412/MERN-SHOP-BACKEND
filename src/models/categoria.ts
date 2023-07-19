import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    color: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    }
});

export const Categoria = mongoose.model('Categoria', categoriaSchema);