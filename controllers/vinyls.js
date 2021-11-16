const express = require('express');
const router = express.Router();
const Vinyl = require('./../Vinyl');

router.post('/', (req, res) => {
	console.log(req.body);
	Vinyl.create({ albumName: 'test album', artistName: 'test artist' }).then(
		(vinyl) => res.json({ status: 200, vinyl: vinyl })
	);
});

router.get('/', (req, res) => {
	Vinyl.find().then((vinyls) => res.json({ status: 200, vinyls: vinyls }));
});

module.exports = router;
