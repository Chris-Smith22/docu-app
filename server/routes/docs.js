const express = require('express');
const router = express.Router();
const { Docs } = require("../models"); //instance of docs model

router.get('/', async (req, res) => {
    const listOfDocs = await Docs.findAll();  //iterate thru table
    res.json(listOfDocs);
});

//Inserting data into DB:
router.post("/", async (req, res) => {
    const doc = req.body;
    await Docs.create(doc);            //wait for data to be inserted into DB
    
    res.json(doc);
    
});



module.exports = router;

