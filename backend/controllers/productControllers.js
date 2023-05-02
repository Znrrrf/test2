const db = require("../models");
const product_tables = db.product_tables;


module.exports = {
    productRegister: async (req, res) => {
        try {
            const productAdded = await product_tables.create(req.body);
            res.status(200).send({
                status: true,
                message: "product added",
                data: productAdded
            })
        } catch (err) {
            res.status(400).send(err);
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const product = await product_tables.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).send({
                status:true,
                message: 'product deleted',
                data: product
            })
        } catch (err) {
            res.status(400).send(err);
        }
    }
}