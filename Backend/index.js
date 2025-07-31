import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import CustomerModel from './customer.js';
import FavoriteModel from './favorites.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Nitro:Nitro%402005@cluster0.hoo8wxe.mongodb.net/test?retryWrites=true&w=majority")


app.post('/signup', (req, res) => {
    CustomerModel.create(req.body)
        .then(customer => res.json(customer))
        .catch(err => res.json(err));
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    CustomerModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({
                        status: "Success",
                        userId: user._id  // Send the user ID back
                    });
                } else {
                    res.json({
                        status: "The password is incorrect"
                    });
                }
            } else {
                res.json({
                    status: "No record exists"
                });
            }
        })
        .catch(err => res.json(err));
});

app.post('/favorites', async (req, res) => {
    const { customerId, productId, productName, price } = req.body;

    try {
        // Check if already favorited
        const existingFavorite = await FavoriteModel.findOne({
            customerId,
            productId
        });

        if (existingFavorite) {
            return res.status(400).json({ message: 'Product already in favorites' });
        }

        const favorite = new FavoriteModel({
            customerId,
            productId,
            productName,
            price
        });

        await favorite.save();
        res.json(favorite);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/favorites/:customerId', async (req, res) => {
    try {
        const favorites = await FavoriteModel.find({ customerId: req.params.customerId });
        res.json(favorites);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

app.delete('/favorites/:customerId/:productId', async (req, res) => {
    try {
        const favorite = await FavoriteModel.findOneAndDelete({
            customerId: req.params.customerId,
            productId: req.params.productId
        });

        if (!favorite) {
            return res.status(404).json({ message: 'Favorite not found' });
        }

        res.json({ message: 'Favorite removed' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
