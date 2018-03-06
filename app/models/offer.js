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
  applicant_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
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
    type: Number,
    min: 1,
    validate : {
      validator : Number.isInteger,
      message   : '{VALUE} is not an integer value'
      }
  },
  approved_on: { type: Date },
  rejected_on: { type: Date },
  accepted_on: { type: Date },
  declined_on: { type: Date },
  created_on: { type: Date, default: Date.now },
  updated_on: { type: Date }
});


function validateOffer(offer) {
	const schema = {
    ticket_id: Joi.objectId().required(),
		applicant: Joi.string().min(1).max(255).required(),
    applicant_id: Joi.objectId().required(),
		type: Joi.string()
    .valid('domestic', 'international').required(),
		professor: Joi.string().min(1).max(255).required(),
    professor_id: Joi.objectId().required(),
    status: Joi.string()
    .valid('pending', 'approved', 'rejected', 'accepted', 'declined').required(),
    //round: Joi.number().integer().min(1), 
    approved_on: Joi.date().timestamp(),
    rejected_on: Joi.date().timestamp().allow(null),
    accepted_on: Joi.date().timestamp().allow(null),
    declined_on: Joi.date().timestamp().allow(null),
    created_on: Joi.date().timestamp(),
    updated_on: Joi.date().timestamp()
	};

	return Joi.validate(offer, schema);
};


module.exports.Offer = mongoose.model('Offer', offerSchema);
module.exports.validate = validateOffer;
