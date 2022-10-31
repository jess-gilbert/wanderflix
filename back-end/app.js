import express from "express";
import { router } from "./routes/router.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Wanderflix BE is started on port ${port}`)
})
