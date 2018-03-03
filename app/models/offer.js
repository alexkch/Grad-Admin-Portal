const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  applicant: {
		type: String,
		required: true,
		minlength: 5,
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
		minlength: 5,
		maxlength: 255,
		trim: true
	},
	status: {
		type: String,
		required: true,
		enum: ['pending', 'approved', 'rejected', 'accepted', 'declined'],
    lowercase: true,
		trim: true
	},
  approved_on: { type: Date },
  rejected_on: { type: Date },
  accepted_on: { type: Date },
  declined_on: { type: Date },
  created_on: { type: Date, default: Date.now },
  updated_on: { type: Date }
});

module.exports = mongoose.model('Offer', offerSchema);
