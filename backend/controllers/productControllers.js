const db = require("../models");
const product_tables = db.product_tables;


module.exports = {
    productRegister: async (req, res) => {
        try {
            const productAdded = product_tables.create(req.body);
            res.status(200).send({
                status: true,
                message: "product added",
                data: productAdded
            })
        } catch (err) {
            res.status(400).send(err)
        }
    }
}