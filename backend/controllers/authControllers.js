const db = require("../models");
const user_logins = db.user_logins;


module.exports = {
    register: async (req, res) => {
        try {
            const data = await user_logins.create(req.body);
            res.status(200).send({
                status: true,
                message: "user success registered",
                data
            });
        } catch (err) {
            res.status(400).send(err);
        }
        
    }
}