var express = require('express');
var router = express.Router();

var messages = require("../queries/messages");


router.get('/get/:id_room/:id_offre', messages.getMessages);
router.post('/add', messages.addMessage);


module.exports = router;
