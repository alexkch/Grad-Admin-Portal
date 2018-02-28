const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const tickets = [
	{id: 1, name: 'ticket1' },
	{id: 2, name: 'ticket2' },
	{id: 3, name: 'ticket3' },

];

app.get('/', (req, res) => {

	res.send('hello world');

});

app.get('/api/tickets', (req, res) => {

	res.send(tickets);

});

app.get('/api/tickets/:id', (req, res) => {

	let ticket = tickets.find(c => c.id === parseInt(req.params.id));
	if (!ticket) res.status(404).send("ticket with given ID was not found");
	res.send(ticket);

});


app.post('/api/tickets', (req, res) => {

	const { error } = validateCourse(req.body);
	if (error) {
		res.status(400).send(error.details[0].message);
		return;
	};

	const ticket = {
		id: tickets.length + 1,
		name: req.body.name
	};
	tickets.push(ticket);
	res.send(ticket);
});


app.put('/api/tickets/:id', (req, res) => {
	

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


app.delete('/api/tickets/:id', (req, res) => {
	

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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));