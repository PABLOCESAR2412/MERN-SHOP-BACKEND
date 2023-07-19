import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    passwordHash: {
        type: String,
        default: ''
    },
    street: {
        type: String,
        default: ''
    },
    apartament: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    zip: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    phone: {
        type: Number,
        default: ''
    },
    isAdmin: {
        type: Boolean,
        default: ''
    }
});

export const User = mongoose.model('User', userSchema);