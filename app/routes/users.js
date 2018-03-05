const { User, validate } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {

  const users = await User.find().sort('applicant');
	res.send(users);
});

module.exports = router;
