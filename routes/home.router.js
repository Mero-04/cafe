const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    res.render("front/index",{
        title: "Home"
    })
});

router.get("/dashboard", (req,res) => {
    res.render("front/dashboard",{
        title: "Dashboard"
    })
});



module.exports = router;