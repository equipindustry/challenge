const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./router/auth");
const companiesRouter = require("./router/companies");
// const productsRouter = require("./router/products");
const usersRouter = require("./router/users");
const app = express();

app.use(bodyParser.json());
app.use("/auth", authRouter);
app.use("/companies", companiesRouter);
// app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
