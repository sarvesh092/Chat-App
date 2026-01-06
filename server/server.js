import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("hello")
})

app.listen(port, () => {
  console.log("App is listining on port:", port);
});
