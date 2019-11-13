import mongoose from 'mongoose';
const mongoDB = 'mongodb://localhost/business_listing_api';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;