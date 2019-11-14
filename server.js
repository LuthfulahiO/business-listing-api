import express from 'express';
import logger from 'morgan';
import { urlencoded } from 'body-parser';
import users from './routes/users';
import businesses from './routes/businesses';
import mongoose from './config/database';
import jwt from 'jsonwebtoken';
const app = express();

app.set('secretKey', 'nodeRestApi');

mongoose.connection.once('open', _ => {
    console.log('Database connected:')
  })
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.json({"Messgae": "API is up"});
});

app.use('users', users);

app.use('businesses', validateUser, businesses);

app.get('/favicon.ico', (req, res) => {
    res.sendStatus(204);
});

function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
      if (err) {
        res.json({status:"error", message: err.message, data:null});
      }else{
        // add user id to request
        req.body.userId = decoded.id;
        next();
      }
    });
    
}

app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req,res,next) => {
    console.log(err);
    if(err.status === 404) {
        res.status(404).json({message: "Not Found"});
    } else {
        res.status(500).json({message: "Something looks wrong :("});
    }
});

app.listen(3000, () => {
    console.log("Server started ....");
})