const express = require('express');
const router = express.Router();
const { Docs } = require("../models"); //instance of docs model

//List of documents (Home)
router.get('/', async (req, res) => {
    const listOfDocs = await Docs.findAll();  //iterate thru table
    res.json(listOfDocs);
});

//Get individual document (ViewDoc)
router.get('/byId/:id', async (req,res) => {
    const id = req.params.id;
    const doc = await Docs.findByPk(id);
    res.json(doc);
})

//Deletion Endpoint:
router.delete("/delById/:id", async (req, res) => {
    const docId = req.params.id;
    
    try {
        const result = await Docs.destroy({ where: { id: docId } });

        if (result) {
            res.status(200).json({ message: 'Document deleted successfully.' });
        } else {
            res.status(404).json({ message: 'Document not found.' });
        }

    } catch (error) {
        console.error('Error deleting document:', error);
        res.status(500).json({ message: 'Failed to delete the document.' });
    }
});


//Inserting data into DB:
router.post("/", async (req, res) => {
    const doc = req.body;
    await Docs.create(doc);            //wait for data to be inserted into DB
    
    res.json(doc);
});





module.exports = router;

