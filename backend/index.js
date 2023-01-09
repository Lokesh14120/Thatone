const fs = require("fs");
const cors = require("cors");
const express = require("express");
// const PythonShell = require("python-shell").PythonShell;

const PORT = 80;
const app = express();

app.use(cors());
app.use(express.json());
app.post("/python",(req,res)=>{
    console.log(req.body);
    // res({req.body});
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
