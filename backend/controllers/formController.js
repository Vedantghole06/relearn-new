import { nanoid } from 'nanoid';
import { Form, FormResponse } from '../models/form.model.js';

// Create a new form
export const createForm = async (req, res) => {
    try {
        const { title, description, sections } = req.body;
        const link = nanoid(10); // Generate a unique link
        const form = new Form({ title, description, sections, link });
        await form.save();
        res.status(201).json({ message: "Form created successfully", form });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// Retrieve all forms
export const getForms = async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// Retrieve a form by link
export const getFormByLink = async (req, res) => {
    try {
        const { link } = req.params;
        const form = await Form.findOne({ link });
        if (!form) {
            return res.status(404).json({ message: "Form not found" });
        }
        res.status(200).json(form);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// Submit form responses
export const submitFormResponse = async (req, res) => {
    try {
        console.log("Incoming request data:", req.body); // Log the incoming request data
        const { formLink, responses } = req.body;
        const form = await Form.findOne({ link: formLink });
        if (!form) {
            return res.status(404).json({ message: "Form not found" });
        }

        const responseWithText = responses.map(response => {
            const question = form.sections.flatMap(section => section.questions).find(q => q._id.toString() === response.questionId);
            return {
                questionId: response.questionId,
                questionText: question.text,
                answer: response.answer,
            };
        });

        const formResponse = new FormResponse({ formLink, responses: responseWithText });
        await formResponse.save();
        res.status(201).json({ message: "Form response submitted successfully", formResponse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// Update a form
export const updateForm = async (req, res) => {
    try {
        const { formId } = req.params;
        const updatedData = req.body;
        const form = await Form.findByIdAndUpdate(formId, updatedData, { new: true });
        res.status(200).json({ message: "Form updated successfully", form });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// Delete a form
export const deleteForm = async (req, res) => {
    try {
        const { formId } = req.params;
        await Form.findByIdAndDelete(formId);
        res.status(200).json({ message: "Form deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};