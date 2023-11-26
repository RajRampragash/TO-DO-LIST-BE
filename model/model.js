import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    todo: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});

export const task = mongoose.model("task", taskSchema);
