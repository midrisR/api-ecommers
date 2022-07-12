const Products = require('../model/products');
const { faker } = require('@faker-js/faker');

const index = async (req, res) => {
	try {
		const create = await Products.find();
		return res.json(create);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { index };
