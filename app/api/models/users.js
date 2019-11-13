import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const saltRound = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
    password: {
        type: String,
        trim: true,
        required: true
    }
});

UserSchema.pre('save', () => {
    this.password = bcrypt.hashSync(this.password, saltRound);
    next();
});

module.exports = mongoose.model('User', UserSchema);