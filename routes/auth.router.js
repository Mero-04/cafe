const express = require('express');
const router = express.Router();
const {User} = require("../models/model");

router.get("/register", (req,res) => {
    res.render("auth/register")
})

router.post("/register", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const phoneNum = req.body.phoneNum;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.findOne({ where: { email: email } });
        if (user) {
            return res.redirect("login")
        }
        const newUser = await User.create({
            username: username,
            email: email,
            phoneNum:phoneNum,
            password: hashedPassword
        });
        return res.redirect("login");
    }
    catch (err) {
        console.log(err);
    }
});

router.get("/login", (req,res) => {
    res.render("auth/login")
});

router.post("/login", async (req,res) => {
    const email = req.body.name;
    const password = req.body.password;

    try {
        const user = await User.findOne({where: email});

        if (!user) {
            return res.render("auth/login", {
                message: "email invalid"
            });
        }

        const match = await bcrypt.compare(password, user.password)
        if (match) {
            res.json("logged iN")
        } else {
            res.render("auth/login", {
                message: "password invalid"
            })
        }
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;