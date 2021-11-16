// step 1: import mongoose
const mongoose = require('mongoose');

// step 2: define connection
mongoose.connect('mongodb://localhost/vinyl-api');

// step 3: export
module.exports = mongoose;
