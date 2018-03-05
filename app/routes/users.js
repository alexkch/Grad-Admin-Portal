const { Offer, validate } = require('../models/offer');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {

  const offers = await Offer.find().sort('applicant');
	res.send(offers);
});
