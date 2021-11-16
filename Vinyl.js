// step 1: import mongoose // step 3: import connection (replacing 'mongoose' to './connection')
const mongoose = require('./connection');

// step 2: create Vinyl schema
const vinylSchema = new mongoose.Schema({
	artistName: String,
	albumName: String,
});

const Vinyl = mongoose.model('Vinyl', vinylSchema);

module.exports = Vinyl;
