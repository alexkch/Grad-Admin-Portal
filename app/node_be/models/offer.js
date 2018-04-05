const mongoose = require('mongoose');
const Joi = require('joi');


const offerSchema = new mongoose.Schema({
  ticket_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ticket'
  },
  applicant: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 255,
    trim: true
	},
  type: {
    type: String,
    required: true,
    enum: ['domestic', 'international'],
    lowercase: true,
		trim: true
  },
  professor: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 255,
		trim: true
	},
  professor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
	status: {
		type: String,
		required: true,
		enum: ['pending', 'approved', 'rejected', 'accepted', 'declined'],
    lowercase: true,
		trim: true,
    default: 'pending'
	},
  round: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 5,
    trim: true
	},
  created_on: { type: Date, default: Date.now }
});


function validateOffer(offer) {
	const schema = {
    ticket_id: Joi.objectId().required(),
		applicant: Joi.string().min(1).max(255).required(),
		type: Joi.string()
    .valid('domestic', 'international').required(),
		professor: Joi.string().min(1).max(255).required(),
    professor_id: Joi.objectId().required(),
    status: Joi.string()
    .valid('pending', 'approved', 'rejected', 'accepted', 'declined').required(),
    round: Joi.string().min(1).max(5).required(),
    created_on: Joi.date().timestamp()
	};

	return Joi.validate(offer, schema);
};


module.exports.Offer = mongoose.model('Offer', offerSchema);
module.exports.validate = validateOffer;
