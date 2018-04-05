const { Ticket, validate } = require('../models/ticket');
const authorize = require('../utils/authorize');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {

  const tickets = await Ticket.find().sort({created_on : -1});
	res.send(tickets);
});

router.post('/', authorize, async (req, res) => {

	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let ticket = new Ticket({
    professor_id: req.body.professor_id,
		professor: req.body.professor,
    status: req.body.status,
    created_by: req.body.created_by
	});

  ticket = await ticket.save();
	res.send(ticket);
});


router.get('/:id', async (req, res) => {
	const ticket = await Ticket.findById(req.params.id);
	if (!ticket) return res.status(404).send("ticket with given ID was not found");
	res.send(ticket);
});


router.put('/:id', /*authorize,*/ async (req, res) => {

  const {error} = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const ticket = await Ticket.findByIdAndUpdate(req.params.id,
    {
      professor_id: req.body.professor_id,
      professor: req.body.professor,
      status: req.body.status,
      created_by: req.body.created_by
    },
    { new : true }
  );
	if (!ticket) return res.status(404).send("ticket with given ID was not found");

	res.send(ticket);
});


router.delete('/:id', /*authorize,*/ async (req, res) => {

	const ticket = await Ticket.findByIdAndRemove(req.params.id);
	if (!ticket) return res.status(404).send("ticket with given ID was not found");

	res.send(ticket);
});


module.exports = router;
