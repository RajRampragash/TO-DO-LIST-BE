import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import taskrouter from "./Routes/router.js"; // Correct import statement
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors());

const PORT = process.env.PORT || 8080;

// router
app.use("/api/tasks", taskrouter); // Correct reference to taskrouter

// test
app.get("/", (req, res) => {
    res.send({ msg: "connection working - To-Do-List" });
})

// db
const uri = process.env.MONGODBURL;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB database connected"))
    .catch((err) => console.error(err))

app.listen(PORT, () => console.log(`server start ${PORT}`))
