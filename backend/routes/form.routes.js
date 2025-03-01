import express from 'express';
import { createForm, getForms, updateForm, deleteForm, getFormByLink, submitFormResponse } from '../controllers/formController.js';

const router = express.Router();

router.post('/create', createForm);
router.get('/all', getForms);
router.put('/update/:formId', updateForm);
router.delete('/delete/:formId', deleteForm);
router.get('/link/:link', getFormByLink);
router.post('/submit', submitFormResponse);

export default router;
