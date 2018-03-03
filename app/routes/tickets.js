
const express = require('express');
const router = express.Router();



router.get('/', async (req, res) => {
  const tickets = await Ticket.find().sort('professor');
	res.send(tickets);

});

router.post('/', async (req, res) => {

	const { error } = validateCourse(req.body);
	if (error) {
		res.status(400).send(error.details[0].message);
		return;
	};

	let ticket = new Ticket({
		name: req.body.name
	});
  ticket = await ticket.save();

	res.send(ticket);
});

router.get('/api/tickets/:id', (req, res) => {

	let ticket = tickets.find(c => c.id === parseInt(req.params.id));
	if (!ticket) res.status(404).send("ticket with given ID was not found");
	res.send(ticket);

});



router.put('/api/tickets/:id', (req, res) => {


	let ticket = tickets.find(c => c.id === parseInt(req.params.id));
	if (!ticket) res.status(404).send("ticket with given ID was not found");

	const {error} = validateCourse(req.body);
	if (error) {
		res.status(400).send(error.details[0].message);
		return;
	};


	ticket.name = req.body.name;
	res.send(ticket);


});


router.delete('/api/tickets/:id', (req, res) => {


	let ticket = tickets.find(c => c.id === parseInt(req.params.id));
	if (!ticket) res.status(404).send("ticket with given ID was not found");

	const index = tickets.indexOf(ticket);
	tickets.splice(index, 1);
	res.send(ticket);

});



function validateCourse(ticket) {

	const schema = {
		name: Joi.string().min(3).required()
	};

	return Joi.validate(ticket, schema);

};
