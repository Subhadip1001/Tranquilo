import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true,
        min:[18, 'Age must be at least 18'],
        max:[100, 'Age must be at most 100']
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength:[6, 'Password must be at least 6 characters long']
    }
})

const User = mongoose.model('User', userSchema);
export default User;