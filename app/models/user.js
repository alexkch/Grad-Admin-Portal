const mongoose = require('mongoose');
const Joi = require('joi');


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  name: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 50,
    trim: true
	},
  usertype: {
    type: String,
    required: true,
    enum: ['faculty', 'budget_office', 'grad_office'],
    lowercase: true,
		trim: true
  },
  created_on: { type: Date, default: Date.now },
  last_login: { type: Date }
});


function validateUser(user) {
	const schema = {
    email: Joi.string().min(5).max(255).email().required(),
    password: Joi.string().min(5).max(255).required(),
    name: Joi.string().min(1).max(50).required(),
		usertype: Joi.string()
    .valid('faculty', 'budget_office', 'grad_office').required(),
    created_on: Joi.date().timestamp(),
    last_login: Joi.date().timestamp()
	};

	return Joi.validate(user, schema);
};

function validateCredentials(user) {
	const schema = {
    email: Joi.string().min(5).max(255).email().required(),
    password: Joi.string().min(5).max(255).required(),
	};

	return Joi.validate(user, schema);
};


module.exports.User = mongoose.model('User', userSchema);
module.exports.validate = validateUser;
module.exports.validateCredentials = validateCredentials;
