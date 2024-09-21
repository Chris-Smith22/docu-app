const express = require('express'); 
const app = express();
app.use(express.json());

const db = require('./models');

//Routers
const docRouter = require('./routes/docs');
app.use("/docs", docRouter);


//Connect DB
db.sequelize.sync().then( () => {

    //Entrypoint of API
    app.listen(3000, () => {
        console.log("Server listening on port 3000");
    });
});


