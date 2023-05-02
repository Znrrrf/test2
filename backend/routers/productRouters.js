const router = require("express").Router();
const { productControllers } = require("../controllers");

router.post("/register", productControllers.productRegister);
router.delete("/delete", productControllers.deleteProduct);

module.exports = router;