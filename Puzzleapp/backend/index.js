//express js
const express = require("express");
//mongoose to connect to mongo db
const mongoose = require("mongoose");
const Product = require("./models/word.model");
const ProductRoute = require("./routes/word.router");
//creat app usin express
const app = express();
//middleware
//for json method posting
app.use(express.json());
//for form method posting with postman
// app.use(express.urlencoded({extended:false}))

app.use("/api/words", ProductRoute);
///router requests
app.get("/", (req, res) => {
  res.send("hellow world updated");
});

//mongo db connect
mongoose
  .connect(
    "mongodb+srv://kpradyumnan:GtfiAEYGWE1JJTuM@backenddb.xetgx.mongodb.net/?retryWrites=true&w=majority&appName=backenddb"
  )
  .then(() => {
    //starting the server
    app.listen(3000, () =>
      console.log("server running at http://localhost:3000")
    );
    console.log("Connected to db!");
  })
  .catch(() => {
    console.log("Connected to db faild!");
  });
