const db = require("../models");
const user_logins = db.user_logins;
const bcrypt = require("bcrypt")


module.exports = {
    register: async (req, res) => {
        try {
            const { username, name, email, password, store_name, phone_number } = req.body;
            const salt = await bcrypt.genSalt(10);
            const hashPass = await bcrypt.hash(password, salt);
            const result = await user_logins.create({
                username,
                email,
                password: hashPass,
                phone_number,
                store_name,
                name
            })
            // const data = await user_logins.create(req.body);
            res.status(200).send({
                status: true,
                message: "user success registered",
                data: result
            });
        } catch (err) {
            res.status(400).send(err);
        }
    },
    login: async (req, res) => {
        try {
            const { value, login, password } = req.body;

            let isExist = null;
            
            if (value === 'email') {
                isExist = await user_logins.findOne({
                    where: {
                        email : login
                    }
                })
            } else if (value === 'number') {
                isExist = await user_logins.findOne({
                    where: {
                        phone_number : login
                    }
                })
            } else if (value === 'username') {
                isExist = await user_logins.findOne({
                    where: {
                        username : login
                    }
                })
            }

            if (!isExist) throw {
                status: false,
                message: "user not found"
            }

            const isValid = await bcrypt.compare(password, isExist.password);
        
            if (!isValid) throw {
                status: false,
                message: "wrong password"
            }

            res.status(200).send({
                status: true,
                message: 'login success',
                data: isExist
            })
        } catch (err) {
            res.status(400).send(err);
        }
    }
}