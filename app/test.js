const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

const ticketSchema = new mongoose.Schema({
	name: String,
	professor: String,
	created_on: { type: Date, default: Date.now },
	redeemed: {type: Boolean, default: false }
});

const Ticket = mongoose.model('Ticket', ticketSchema);


async function createTicket() {
const ticket = new Ticket({
	name: 'test person',
	professor: 'test prof'
});

const result = await ticket.save();
console.log(result);
};

createTicket();
