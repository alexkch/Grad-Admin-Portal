const mongoose = require('mongoose');
const Ticket = require('./models/ticket.js');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

async function createTicket() {
	const ticket = new Ticket({
		name: 'test person2',
		professor: 'test prof2'
	});

	try {
		const result = await ticket.save();
		console.log(result);
	} catch (e) {
		for (field in e.errors)
			console.log(e.erros[field].message); //logs out all validation erros
	}
};

createTicket();
