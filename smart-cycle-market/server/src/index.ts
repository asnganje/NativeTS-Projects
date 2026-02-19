import express from "express";
import authRouter from "./routes/auth";
import { sign_up } from "./controllers/auth";
// import bodyParser from "body-parser"

const app = express();
app.use(express.json());
// reading content from a form
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
