import express from "express";
import { task } from "../model/model.js"; // Import the Task model

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const docs = await task.find();
        res.json(docs);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

router.post('/', async (req, res) => {
    try {
        const newTaskInstance = new task(req.body);
        const doc = await newTaskInstance.save();
        res.json(doc);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

router.put('/:id', async (req, res) => {
    try {
        const doc = await task.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        res.json(doc);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const doc = await task.findByIdAndDelete(req.params.id);
        res.json(doc);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

export default router;
