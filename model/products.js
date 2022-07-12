const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "cannot be an empty field"],
  },
  price: {
    type: Number,
    required: [true, "cannot be an empty field"],
  },
  image: {
    type: String,
    required: [true, "cannot be an empty field"],
  },
});

module.exports = mongoose.model("Product", productsSchema);
