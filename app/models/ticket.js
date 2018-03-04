const mongoose = require('mongoose');
const Joi = require('joi');

const ticketSchema = new mongoose.Schema({
	professor: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 255,
		trim: true
	},
	status: {
		type: String,
		required: true,
		enum: ['granted', 'redeemed'],
		lowercase: true,
		trim: true
	},
	created_by: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 255,
		trim: true
	},
	created_on: { type: Date, default: Date.now },
	updated_on: { type: Date }
});


function validateTicket(ticket) {
	const schema = {
		professor: Joi.string().min(1).max(255).required(),
		status: Joi.string().valid('granted', 'redeemed').required(),
		created_by: Joi.string().min(1).max(255).required(),
		created_on: Joi.date().timestamp()
	};

	return Joi.validate(ticket, schema);
};

module.exports.Ticket = mongoose.model('Ticket', ticketSchema);
module.exports.validate = validateTicket;
