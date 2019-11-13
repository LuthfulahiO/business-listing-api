import express from 'express';
const router = express.Router();
import businessController from '../app/api/controllers/businesses';

router.get('/', businessController.getAll);
router.post('/', businessController.create);
router.get('/:movieId', businessController.getById);
router.put('/:movieId', businessController.updateById);
router.delete('/:movieId', businessController.deleteById);

module.exports = router;