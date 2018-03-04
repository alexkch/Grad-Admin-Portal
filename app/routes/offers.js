const { Offer, validate } = require('../models/offer');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

  const offers = await Offer.find().sort('applicant');
	res.send(offers);

});

router.post('/', async (req, res) => {

	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let offer = new Offer({

    applicant: req.body.applicant,
    type: req.body.type,
    professor: req.body.professor,
    status: req.body.status,

	});

  offer = await offer.save();
	res.send(offer);
});


router.get('/:id', async (req, res) => {

	const offer = await Offer.findById(req.params.id);
	if (!offer) return res.status(404).send("offer with given ID was not found");
	res.send(offer);
});


router.put('/:id', async (req, res) => {

  const {error} = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const offer = await Offer.findByIdAndUpdate(req.params.id,
    {
      applicant: req.body.applicant,
      type: req.body.type,
      professor: req.body.professor,
      status: req.body.status,
    },
    { new : true }
  );
  switch (req.body.status) {
      case 'pending':
          break;
      case 'approved':
          offer["approved_on"] = Date.now;
          break;
      case 'rejected':
          offer["rejected_on"] = Date.now;
          break;
      case 'accepted':
          offer["accepted_on"] = Date.now;
          break;
      case 'declined':
          offer["declined_on"] = Date.now;
          break;
  };
	if (!offer) return res.status(404).send("offer with given ID was not found");

	res.send(offer);

});


router.delete('/:id', async (req, res) => {

	const offer = await Offer.findByIdAndRemove(req.params.id);
	if (!offer) return res.status(404).send("offer with given ID was not found");

	res.send(offer);

});


module.exports = router;
