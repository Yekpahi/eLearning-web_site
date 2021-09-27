const  express = require('express');
const cors = require("cors");
const fs = require("fs");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { Mongoose } = require('mongoose');
require('dotenv').config();

//create express app
const app = express();


//DATABASE
mongoose.connect(process.env.DATABASE, {})
    .then(() => console.log("**DB Connected**"))
    .catch((err) => console.log("DB connexion ERR => ", err))


//apply middlewares
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));


//ROUTE
fs.readdirSync("./routes").map((r) => {
    app.use("/api", require(`./routes/${r}`))
})

//PORT

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`))

