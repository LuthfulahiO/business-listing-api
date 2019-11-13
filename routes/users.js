import express from 'express';
const router = express.Router();
import userController from '../app/api/controllers/users';

router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);

module.exports = router;