const express = require("express");
const dotenv = require("dotenv");
const app = express();
const db = require("./models");
const cors = require("cors");

dotenv.config();
app.use(cors())
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send({
        message: "this is my api"
    });
});

const { authRouters, userRouters, productRouters } = require("./routers");
app.use("/auth", authRouters);
app.use("/user", userRouters);
app.use("/product", productRouters);


app.listen(process.env.PORT, () => {
    console.log(`server is running on port: ${process.env.PORT}...`);
});

    // JANGAN UNCOMMENT KODE DIBAWAH INI !!!!!!!!!!!
    // db.sequelize.sync({ alter : true });
    // JANGAN UNCOMMENT KODE DIATAS INI !!!!!!!!!!!

