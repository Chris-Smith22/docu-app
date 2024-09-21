const express = require('express') 
const app = express() 
const db = require('./models')

//Connect DB
db.sequelize.sync().then( () => {

    //Entrypoint of API
    app.listen(3000, () => {
        console.log("Server listening on port 3000")
    });
});


