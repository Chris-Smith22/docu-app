const express = require('express'); 
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(express.json({limit: '2mb' }));
app.use(cors());

const db = require('./models');

//Routers
const docRouter = require('./routes/docs');
app.use("/docs", docRouter);


//Connect DB
db.sequelize.sync().then( () => {

    //Entrypoint of API
    app.listen(port, '0.0.0.0', () => {
        console.log("Server listening on port 3001");
    });
});


