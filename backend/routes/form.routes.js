import express from 'express';
import { createForm, getForms, updateForm, deleteForm } from '../controllers/formController.js';

const router = express.Router();

router.post('/create', createForm);
router.get('/all', getForms);
router.put('/update/:formId', updateForm);
router.delete('/delete/:formId', deleteForm);

export default router;
