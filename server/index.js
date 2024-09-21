const express = require('express'); 
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

//Routers
const docRouter = require('./routes/docs');
app.use("/docs", docRouter);


//Connect DB
db.sequelize.sync().then( () => {

    //Entrypoint of API
    app.listen(3001, () => {
        console.log("Server listening on port 3001");
    });
});


