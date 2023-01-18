const express = require("express");
const router = express.Router();
const { Food, Menu } = require("../models/model")

router.get("/create", async (req,res) => {
    const menus = await Menu.findAll();
    res.render("front/food-create",{
        title: "Food Add",
        menus:menus
    })
})

router.post("/create", async (req,res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const menuId = req.body.menuId;
    try{
        if (!(name)) {
            return res.render("front/food-create", {
                message: "Input is not null"
            });
          }
        await Food.create({
            name:name,
            description:description,
            price:price,
            menuId:menuId,
        });
        return res.redirect("/food")
    }
    catch(err){
        console.log(err);
    }
})


router.get("/", async (req,res) => {
    const foods = await Food.findAll();
    res.render("front/food", {
        title: "Manage Food",
        foods:foods
    })
})


module.exports = router;