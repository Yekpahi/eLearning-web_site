const  express = require('express');
const cookieParser = require('cookie-parser')
const cors = require("cors");
import { readdirSync } from "fs";
const csrf = require("csurf");
const mongoose = require("mongoose");
const morgan = require("morgan");
require('dotenv').config();

const csrfProtection = csrf({ cookie: true})
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
app.use(cookieParser())

//ROUTE
readdirSync("./routes").map((r) => {
    app.use("/api", require(`./routes/${r}`))
});

//csrf
app.use(csrfProtection)
app.get("/api/csrf-token", (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
});

//PORT

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

