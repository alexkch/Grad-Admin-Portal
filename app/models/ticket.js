const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
	professor: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
		trim: true
	},
	status: {
		type: String,
		required: true,
		enum: ['Granted', 'Redeemed'],
		lowercase: true,
		trim: true
	},
	created_by: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
		trim: true
	},
	created_on: { type: Date, default: Date.now },
	updated_on: { type: Date }
});

module.exports = mongoose.model('Ticket', ticketSchema);
