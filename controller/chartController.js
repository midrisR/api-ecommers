const Chart = require("../model/charts");
const mongoose = require("mongoose");
const index = async (req, res) => {
  try {
    const chart = await Chart.find().populate("product");
    return res.status(200).json(chart);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  const filter = {
    product: mongoose.Types.ObjectId("62cd398a0b690a3c27eae3d4"),
  };
  const find = await Chart.find(filter);

  try {
    if (find) {
      const chart = await Chart.findOneAndUpdate(
        filter,
        {
          quantity: req.body.quantity,
        },
        { new: true }
      );
      return res.status(200).json(chart);
    }
    const chart = await Chart.create(req.body);
    return res.status(200).json(chart);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { index, create };
