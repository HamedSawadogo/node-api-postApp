const express = require("express");
const connectDB = require("./config/db");
const app = express();
const port = 5000;
connectDB();
require("dotenv").config();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/stuff", require("./routes/user.routes"));
app.use("/stuff", require("./routes/stuff.routes"));
app.listen(port, () => console.log("server en marche"));
