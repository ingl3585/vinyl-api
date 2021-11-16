const express = require('express');
const router = express.Router();
const Vinyl = require('./../Vinyl');

// INDEX
// display all vinyls and return 200 ok
router.get('/', (req, res) => {
	Vinyl.find().then((vinyls) =>
		res.status(200).json({ status: 200, vinyls: vinyls })
	);
});

// CREATE
// create vinyl and return 201 created
router.post('/', (req, res) => {
	Vinyl.create(req.body).then((vinyl) =>
		res.status(201).json({ status: 201, vinyl: vinyl })
	);
});

// DELETE /:id
// delete vinyl and return 204 no content
router.delete('/:id', (req, res) => {
	Vinyl.deleteOne({ _id: req.params.id }).then(() => {
		res.status(204).json();
	});
});

// PUT /:id
// update vinyl and return 200 ok
// { new: true } shows updated vinyl
router.put('/:id', (req, res) => {
	Vinyl.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
		(vinyl) => {
			res.status(200).json(vinyl);
		}
	);
});

module.exports = router;
