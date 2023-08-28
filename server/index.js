import express from "express";
import router from "./routes/route.js";
import cors from "cors";
import { dbConnect } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);


const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

