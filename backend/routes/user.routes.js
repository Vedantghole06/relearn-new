import express from 'express';
import { signup, login, getOneUser, deleteProfile, updateProfile, getAllUsers } from '../controllers/user.controllers.js';
import { protect } from '../middlewares/user.middlewares.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', protect, getAllUsers); // Updated route
router.get('/:id', getOneUser);
router.delete('/delete', protect, deleteProfile);
router.put('/update', protect, updateProfile);

export default router;
