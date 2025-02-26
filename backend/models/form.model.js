import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['Short Answer', 'Long Answer', 'Multiple Choice', 'Checkbox', 'Decimal', 'Number', 'File'],
    },
    options: [{ type: String }],
}, { _id: false });

const sectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    questions: [questionSchema]
}, { _id: false });

const formSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    sections: [sectionSchema]
}, { timestamps: true });

export default mongoose.model("Form", formSchema);