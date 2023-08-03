require("dotenv").config();

const express = require("express");
const PORT = process.env.SERVER_PORT || 3003;
const { sequelize } = require("./models");

const productRouter = require("./routes/product.routes");
const userRouter = require("./routes/user.routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

sequelize
  .authenticate()
  .then(function (error) {
    console.log("database connection successfully connected");
  })
  .catch(function (error) {
    console.log("unable to connect to database" + error);
  });

app.get("/", (req, res) => {
  res.send({ name: "myProductApi", version: "1.0.0", author: "Faisal" });
});

app.use("/api/products", productRouter);
app.use("/api/user", userRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server Running on " + PORT);
});
