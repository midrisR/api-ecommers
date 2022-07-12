const router = require("express").Router();
const { index } = require("../controller/productsController");

router.get("/", index);

module.exports = router;
