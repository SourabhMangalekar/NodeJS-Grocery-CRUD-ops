const express = require("express");

const bodyParser = require("body-parser");

const groceryRoutes = require("./routes/groceryRoutes.js");

const app = express();

const errorController = require("./controllers/error");

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/groceries", groceryRoutes);

app.listen(ports, () => console.log(`listening on ${ports}`));
