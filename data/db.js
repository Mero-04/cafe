const mysql = require('mysql2');
const config = require("../config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    dialect: "mysql",
    host: config.db.host
});

async function connect(){
    try{
        await sequelize.sync({alter: true});
        await sequelize.authenticate();
        console.log("server running and all tables sync");
    }
    catch(err) {
        console.log("error =>",err)
    }

}

connect();


module.exports = sequelize;



















// let connection = mysql.createConnection(config.db);
// connection.connect(function(err){
//     if(err){
//         return console.log(err);
//     }

//     connection.query("select * from blogs", function(err,result){
    
//     });

//     console.log("mysql connection success");
// });


// module.exports = connection.promise();