import Form from '../models/form.model.js';

// Create a new form
export const createForm = async (req, res) => {
    try {
        const { title, description, sections } = req.body;
        const form = new Form({ title, description, sections });
        await form.save();
        res.status(201).json({ message: "Form created successfully", form });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve all forms
export const getForms = async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
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
        res.status(500).json({ message: error.message });
    }
};
