const mongoose = require("mongoose");

const chartShcema = mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "cannot be an empty field"],
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: [true, "cannot be an empty field"],
  },
});

module.exports = mongoose.model("Chart", chartShcema);
