const db = require("../models");
const product_tables = db.product_tables;


module.exports = {
    productRegister: async (req, res) => {
        try {
            // const [product_name, user_seller_id, price, img_src, category, description, stock] = req.body
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
    },
    getProducts: async (req, res) => {
        try{
            const product = await product_tables.findAll();
            res.status(200).send({
                status: true,
                message: "success",
                data: product
            })
        } catch (err) {
            res.status(400).send(err);
        }
    },
    getProductById: async (req, res) => {
        try {
            const { user_seller_id } = req.body;
            const productById = await product_tables.findAll({
                where: {
                    user_seller_id
                }
            });
            res.status(200).send({
                status: true,
                message: "product found",
                productById
            })
        } catch (err) {
            res.status(400).send(err);
        }
    }
}