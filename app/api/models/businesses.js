import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    url: {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model('Business', BusinessSchema);