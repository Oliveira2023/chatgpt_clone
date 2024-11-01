const express = require('express');
const promptController = require('../controllers/prompt-controller');
const routes = express.Router();

routes.post('/api/prompt', promptController.sendText);

routes.post('/', (req, res) => {
    res.send('Hello World');
});


module.exports = routes;