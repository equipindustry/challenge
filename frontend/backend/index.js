const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./router/auth");
const companiesRouter = require("./router/companies");
const productsRouter = require("./router/products");
const usersRouter = require("./router/users");
const cors = require ("cors");
const app = express();
app.use(cors())
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Allow', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-type,Authorization');
  
  next();
});
app.use(bodyParser.json());
app.use("/auth", authRouter);
app.use("/companies", companiesRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
