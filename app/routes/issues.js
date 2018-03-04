const { Issue, validate } = require('../models/issue');
const { Note, _ , validateNote } =  require('../models/note');
const mongoose = require('mongoose');
const express = require('express');
const Joi = require('joi');
const router = express.Router();

router.get('/', async (req, res) => {

  const issues = await Issue.find().sort('created_by');
	res.send(issues);

});

router.post('/', async (req, res) => {

	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let issue = new Issue({
    created_by: req.body.created_by,
    description: req.body.description,
    status: req.body.status,
    priority: req.body.priority
	});

  issue = await issue.save();
	res.send(issue);
});

router.post('/:id/addnote', async (req, res) => {

  let issue = await Issue.findById(req.params.id);
	if (!issue) return res.status(404).send("issue with given ID was not found");

  const { error } = validateNote(req.body.note);
	if (error) return res.status(400).send(error.details[0].message);

  issue.notes.push(req.body.note);
  issue = await issue.save();
	res.send(issue);
});


/*
router.get('/:id', async (req, res) => {

	const issue = await Issue.findById(req.params.id);
	if (!issue) return res.status(404).send("issue with given ID was not found");
	res.send(issue);
});


router.put('/:id', async (req, res) => {

  const {error} = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

  let json = {
    applicant: req.body.applicant,
    type: req.body.type,
    professor: req.body.professor,
    status: req.body.status,
  };

  switch (req.body.status) {
      case 'pending':
          break;
      case 'approved':
          json.approved_on = Date.now();
          break;
      case 'rejected':
          json.rejected_on = Date.now();
          json.accepted_on = null;
          json.declined_on = null;
          break;
      case 'accepted':
          json.accepted_on = Date.now();
          json.declined_on = null;
          json.rejected_on = null;
          break;
      case 'declined':
          json.declined_on = Date.now();
          json.accepted_on = null;
          json.rejected_on = null;
          break;
  };

	const issue = await Issue.findByIdAndUpdate(req.params.id, json, { new : true });
	if (!issue) return res.status(404).send("issue with given ID was not found");

	res.send(issue);

});


router.delete('/:id', async (req, res) => {

	const issue = await Issue.findByIdAndRemove(req.params.id);
	if (!issue) return res.status(404).send("issue with given ID was not found");

	res.send(issue);

});

*/
module.exports = router;
