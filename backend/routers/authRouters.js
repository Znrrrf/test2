const router = require("express").Router();
const { authControllers } = require("../controllers");


router.post("/register", authControllers.register);
router.post("/login", authControllers.login);


module.exports = router;