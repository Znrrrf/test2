const router = require("express").Router();
const { productControllers } = require("../controllers");

router.post("/register", productControllers.productRegister);
router.delete("/delete", productControllers.deleteProduct);
router.get("/all", productControllers.getProducts);
router.post("/seller",productControllers.getProductById);

module.exports = router;