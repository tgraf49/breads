
// Dependencies
require('dotenv') .config();
const express = require('express');
const app = express();

// Configuration
const PORT = process.env.PORT;
console.log(PORT)

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
});

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})