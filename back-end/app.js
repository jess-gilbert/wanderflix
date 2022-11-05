import express from "express";
import { router } from "./routes/router.js";
import bodyParser from "body-parser";
import cors from "cors";

export const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);

app.get('/', (req, res) => {
    res.send('Hello World');
})


export default app;

