const router = require("express").Router();
const { index, create } = require("../controller/chartController");

router.get("/", index);
router.post("/", create);

module.exports = router;
