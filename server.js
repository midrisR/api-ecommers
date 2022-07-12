const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");

const port = 5000 || process.env.PORT;
const connectDB = require("./config/db");

const products = require("./router/products");
const chart = require("./router/charts");

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/products", products);
app.use("/chart", chart);

app.listen(port, () => console.log(`Server is running on port ${port}`));
