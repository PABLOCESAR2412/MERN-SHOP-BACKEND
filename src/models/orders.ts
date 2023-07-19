import{User} from './usuario';
import{OrderItem} from './orderItem';
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    orderItems: {
        type: OrderItem,
        require: true,
    },
    shippingAddress1: {
        type: String,
        default: ''
    },
    shippingAddress2: {
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
    status: {
        type: String,
        default: ''
    },
    totalPrace: {
        type: Number,
        default: ''
    },
    user: {
        type: User,
        default: ''
    },
    dateOrder: {
        type: Date,
        default: ''
    }
});

export const Order = mongoose.model('Order', orderSchema);