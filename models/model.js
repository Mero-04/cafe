const {DataTypes} = require('sequelize');
const sequelize = require("../data/db");

const User = sequelize.define("user", {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false
    },
    phoneNum: {
        type:DataTypes.STRING,
        allowNull:false
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    }   
}, {timeStamps: true});


const Menu = sequelize.define("menu", {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    active: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: "0"
    }
});

const Food = sequelize.define("food", {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    price: {
        type: DataTypes.STRING,
        allowNull: true
    },
    active: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: "0"
    }
});


Menu.hasMany(Food, {onDelete: 'CASCADE',onUpdate: 'CASCADE'});
Food.belongsTo(Menu)

module.exports = {
    User,
    Menu,
    Food
};