const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/MoviesDB")
  .then(() => {
    console.log("connect mongodb");
  })
  .catch((err) => {
    console.log("mongodb error", err);
  });
