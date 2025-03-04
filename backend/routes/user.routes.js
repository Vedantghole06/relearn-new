import express from 'express';
import { signup, login, getAllUsers, deleteUserById, deleteProfile,logout, updateProfile } from '../controllers/user.controllers.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/',  getAllUsers); // Protected route
router.delete('/:id', deleteUserById); // Protected route
router.delete('/delete', deleteProfile);
router.put('/update', authMiddleware, updateProfile);
router.post('/logout', logout); // Add logout route
export default router;                                                                    