const Products = require("../model/products");
const { faker } = require("@faker-js/faker");

const index = async (req, res) => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(100, 200, 0),
      image: faker.image.animals(500, 500),
    });
  }
  try {
    const create = await Products.create(arr);
    return res.json(create);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { index };
