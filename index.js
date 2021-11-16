// step 1: include express, morgan, and set up initial get on homepage.
// step 2: include app.listen.
// step 3: include "start": "node index.js" and "server": "nodemon index.js" - i.e. npm start and npm run server. Could also install nodemon globally and then use nodemon index.js in the terminal.
// step 4: create GET/POST route below.

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const vinylsController = require('./controllers/vinyls');
const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));
app.use('/vinyls', vinylsController);

app.listen('3000', () => {
	console.log('Server running on port 3000');
});
