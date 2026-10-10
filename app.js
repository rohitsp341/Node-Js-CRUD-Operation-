import express from "express";
import db from "./db.js";
import masterDepartmentRouter from "./routes/userRoutes.js";
const app = express();

app.use(express.json());


app.use("/api/departments", masterDepartmentRouter);

app.get('/test',(req,res)=>{
res.status(200).send('<h1>Server running</h1>');
});



const POST=8000;
app.listen(POST, () => {
    console.log("server running on port 8000");
});