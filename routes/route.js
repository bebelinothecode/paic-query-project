const express = require('express');
const router = express.Router();
const {query1} = require("../controllers/query");

router.route('/').get(query1);





module.exports = router