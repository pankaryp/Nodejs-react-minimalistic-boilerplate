const express = require('express');
const router = express.Router();

// Home Route
router.get('/home', function (req, res) {

    res.json([{
        id: 1,
        name: "Hello World - Server"
    }]);

});

module.exports = router;