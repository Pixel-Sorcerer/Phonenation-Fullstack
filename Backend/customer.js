import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const CustomerModel = mongoose.model('signup data', CustomerSchema);

export default CustomerModel;
