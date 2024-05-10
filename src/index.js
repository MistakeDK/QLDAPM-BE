const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");
const app = express()
app.use(express.json())
require("dotenv").config();
app.use(cors());

mongoose
    .connect(process.env.MONGO_DB)
    .then(() => {
        console.log("connect successfully");
    })
    .catch((err) => console.log(err));
app.listen(process.env.PORT, () => console.log("server is running"));
