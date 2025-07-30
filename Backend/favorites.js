import mongoose from 'mongoose';

const FavoriteSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'signup data',
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const FavoriteModel = mongoose.model('Favorite', FavoriteSchema);

export default FavoriteModel;