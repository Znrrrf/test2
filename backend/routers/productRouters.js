const router = require("express").Router();
const { productControllers } = require("../controllers");

router.post("/register", productControllers.productRegister);


module.exports = router;