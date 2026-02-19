import express from "express";
import authRouter from "./routes/auth";
import { connectDB } from "./db";
import dotenv from "dotenv"

dotenv.config()

// import bodyParser from "body-parser"

const app = express();
app.use(express.json());

// reading content from a form
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);

const port = 3000;
const uri = process.env.URI

const start = async() => {
  try {
    await connectDB(uri)
    app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
  } catch (error) {
    console.log("Error starting up the app");
    
  }
}

start()
