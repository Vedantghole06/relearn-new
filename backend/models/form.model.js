import mongoose from 'mongoose';

const responseSchema = new mongoose.Schema({
    formLink: {
        type: String,
        required: true,
    },
    responses: [
        {
            questionId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
            },
            questionText: {
                type: String,
                required: true,
            },
            answer: {
                type: mongoose.Schema.Types.Mixed,
                required: true,
            },
        },
    ],
}, { timestamps: true });

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
}, { _id: true });

const sectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    questions: [questionSchema]
}, { _id: true });

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
    sections: [sectionSchema],
    link: {
        type: String,
        unique: true,
        required: true,
    }
}, { timestamps: true });

export const Form = mongoose.model("Form", formSchema);
export const FormResponse = mongoose.model("FormResponse", responseSchema);