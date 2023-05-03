const router = require("express").Router();
const { userControllers } = require("../controllers");


router.post("/delete/:id", userControllers.deleteUser);
router.get("/all", userControllers.allUser);



module.exports = router;