require("dotenv").config();
const express = require("express");
require("./db/conn");
const app = express();
const cors = require("cors");
const router = require("./Routes/router");
const PORT = process.env.PORT ||  6010;


app.use(cors());
app.use(express.json());
app.use(router);
app.use("/uploads",express.static("./uploads"));
app.use("/files",express.static("./public/files"));

app.listen(PORT, (req, res)=>{
 console.log(`Server Started at Port NO: ${PORT}`)
})