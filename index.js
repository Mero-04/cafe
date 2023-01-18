//express
const express = require('express');
const app = express();

const port = 3000;

const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const sequelize = require('./data/db');

//routes




//view engine
app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(csurf());

const HomeRouter = require("./routes/home.router")
const AuthRouter = require("./routes/auth.router")
const MenuRouter = require("./routes/menu.router")
const FoodRouter = require("./routes/food.router")
const OrderRouter = require("./routes/order.router")


app.use("/", HomeRouter);
app.use("/auth", AuthRouter);
app.use("/menu", MenuRouter);
app.use("/food", FoodRouter);
app.use("/order", OrderRouter);


//serv
app.listen(port, () => {
    console.log(`server listing on port ${port}`)
})