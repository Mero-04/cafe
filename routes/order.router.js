const express = require("express");
const router = express.Router();
const { Menu, Food } = require("../models/model")

router.get("/create", (req,res) => {
    res.render("front/menu-create",{
        title: "Menu-Add"
    })
})

router.post("/create", async (req,res) => {
    const name = req.body.name;
    try{
        if (!(name)) {
            return res.render("menu/create", {
                message: "Input is not null"
            });
          }
        await Menu.create({
            name:name
        });
        return res.redirect("/menu")
    }
    catch(err){
        console.log(err);
    }
})


router.get("/", async (req,res) => {
    const menus = await Menu.findAll();
    const foods = await Food.findAll();
    
    res.render("front/order", {
        title: "Manage Order",
        menus:menus,
        foods:foods
    })
})


module.exports = router;