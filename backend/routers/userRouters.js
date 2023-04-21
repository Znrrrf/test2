const router = require("express").Router();
const { userControllers } = require("../controllers");


router.post("/delete/:id", userControllers.deleteUser);



module.exports = router;