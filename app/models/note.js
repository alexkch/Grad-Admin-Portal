const mongoose = require('mongoose');
const Joi = require('joi');

const noteSchema = new mongoose.Schema({
  message: {
		type: String,
		required: true,
		minlength: 1,
    trim: true
	},
  author: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
    trim: true
  },
  /*
  author_id:
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ticket'
  },
  */
  created_on: { type: Date, default: Date.now },
  updated_on: { type: Date }
});


function validateNote(note) {
	const schema = {
		message: Joi.string().min(1).required(),
    author: Joi.string().min(1).max(255).required(),
    //author_id: Joi.objectId().required(),
    created_on: Joi.date().timestamp(),
    updated_on: Joi.date().timestamp()
	};

	return Joi.validate(note, schema);
};

module.exports.Note = mongoose.model('Note', noteSchema);
module.exports.noteSchema = noteSchema;
module.exports.validateNote = validateNote;
