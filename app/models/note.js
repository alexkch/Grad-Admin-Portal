const mongoose = require('mongoose');
const Joi = require('joi');

const noteSchema = new mongoose.Schema({
  message: {
		type: String,
		required: true,
		minlength: 1,
    trim: true
	},
  created_on: { type: Date, default: Date.now },
  updated_on: { type: Date }
});


function validateNote(note) {
	const schema = {
		message: Joi.string().min(1).required(),
    created_on: Joi.date().timestamp(),
    updated_on: Joi.date().timestamp()
	};

	return Joi.validate(note, schema);
};

module.exports.Note = mongoose.model('Note', noteSchema);
module.exports.validate = validateNote;
