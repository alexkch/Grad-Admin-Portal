const { Ticket, validate } = require('../models/ticket');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

  const tickets = await Ticket.find().sort('professor');
	res.send(tickets);

});

router.post('/', async (req, res) => {

	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let ticket = new Ticket({
		name: req.body.name
	});

  ticket = await ticket.save();
	res.send(ticket);
});


router.get('/:id', async (req, res) => {

	const ticket = await Ticket.findById(req.params.id);
	if (!ticket) return res.status(404).send("ticket with given ID was not found");
	res.send(ticket);
});


router.put('/:id', async (req, res) => {

  const {error} = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const ticket = await Ticket.findByIdAndUpdate(req.params.id,
    { professor: req.body.professor },
    { new : true }
  );
	if (!ticket) return res.status(404).send("ticket with given ID was not found");

	res.send(ticket);

});


router.delete('/:id', async (req, res) => {

	const ticket = await Ticket.findByIdAndRemove(req.params.id);
	if (!ticket) return res.status(404).send("ticket with given ID was not found");

	res.send(ticket);

});


module.exports = router;
