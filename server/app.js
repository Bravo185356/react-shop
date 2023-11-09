const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const authRouter = require("./routes/auth");
const productRouter = require('./routes/products')
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/api/auth', authRouter);
app.use('/api/', productRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = app;