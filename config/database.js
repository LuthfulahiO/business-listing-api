import mongoose from 'mongoose';
const mongoDB = 'mongodb://localhost:27017/business-listing';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;