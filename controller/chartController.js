const Chart = require('../model/charts');
const mongoose = require('mongoose');

const index = async (req, res) => {
	try {
		const chart = await Chart.find().populate('product');
		return res.status(200).json(chart);
	} catch (error) {
		console.log(error);
	}
};

const create = async (req, res) => {
	const { quantity } = req.body;
	const filter = {
		product: mongoose.Types.ObjectId(req.body.product),
	};
	const find = await Chart.findOne(filter);
	console.log(find);
	try {
		if (find !== null) {
			const update = await Chart.findOneAndUpdate(
				filter,
				{ quantity: quantity + find.quantity },
				{ new: true }
			);
			return res.status(200).json(update);
		} else {
			const chart = await Chart.create(req.body);
			return res.status(200).json(chart);
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = { index, create };
