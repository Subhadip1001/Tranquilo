import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    message:{
        type: String,
        required: true,
        minlength:[10, 'Message must be at least 10 characters long']
    }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
export default Feedback;
