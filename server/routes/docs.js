const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello World!");
});

router.post("/", (req, res) => {
    const doc = req.body;

    doc.title
});



module.exports = router;

