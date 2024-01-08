const express = require("express");
const homeRoute = require("./route/home");
 
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", homeRoute);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
