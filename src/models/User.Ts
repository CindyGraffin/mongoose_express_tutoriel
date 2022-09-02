import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
})

export const User = mongoose.model('User', UserSchema)