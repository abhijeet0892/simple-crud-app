const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/userRoute");
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected Successfuly");

    app.listen(process.env.PORT || 3690, (err) => {
      if (err) console.log();
      console.log("db running successfuly at", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error: ", error);
  });

app.use(userRoute);
