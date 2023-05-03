const db = require("../models");
const user_logins = db.user_logins;



module.exports = {
    deleteUser: async (req, res) => {
        try {
            const data = await user_logins.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).send({
                status: true,
                message: "user success deleted"
            });
        } catch (err) {
            res.status(400).send(err);
        }
    },
    allUser: async (req, res) => {
        try {
            const result = await user_logins.findAll({
                attributes : ['id', 'username', 'email', 'name', 'store_name']
            });
            res.status(200).send({
                status: true,
                data: result
            });
        } catch (err) {
            res.status(400).send(err);
        }
    }
}