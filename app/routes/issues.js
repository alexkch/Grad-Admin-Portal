const { Issue, validate } = require('../models/issue');
const { _ , validateNote } =  require('../models/note');
const mongoose = require('mongoose');
const express = require('express');
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


router.get('/:id', async (req, res) => {

	const issue = await Issue.findById(req.params.id);
	if (!issue) return res.status(404).send("issue with given ID was not found");
	res.send(issue);
});


router.put('/:id', async (req, res) => {

  const {error} = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

  const issue = await Issue.findByIdAndUpdate(req.params.id,
    {
      created_by: req.body.created_by,
      description: req.body.description,
      status: req.body.status,
      priority: req.body.priority
    },
    { new : true }
  );
	if (!issue) return res.status(404).send("issue with given ID was not found");

	res.send(issue);
});


router.delete('/:id', async (req, res) => {

	const issue = await Issue.findByIdAndRemove(req.params.id);
	if (!issue) return res.status(404).send("issue with given ID was not found");
	res.send(issue);

});

// to add note
router.post('/:id/new', async (req, res) => {

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).send("Not valid ID");

  let issue = await Issue.findById(req.params.id);
	if (!issue) return res.status(404).send("issue with given ID was not found");

  /* JSON has to be of notation
  { "message" : "msg1", "author" : "author1", ...}
  */
  const { error } = validateNote(req.body);
	if (error) return res.status(400).send(error.details[0].message);

  const result = await Issue.update({ "_id" : req.params.id },
    { $push: { notes : req.body }
  });
  res.send(result);

  //issue.notes.push(req.body);
  //issue = await issue.save();
	//res.send(issue);
});

// to add note
router.post('/:id/del/:note_id', async (req, res) => {

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).send("Not valid ID");

  let issue = await Issue.findById(req.params.id);
	if (!issue) return res.status(404).send("issue with given ID was not found");

  const result = await Issue.update({ "_id" : req.params.id },
    { $pull: { notes : { "_id" : req.params.note_id }}
  });
	if (!result.nModified) return res.status(404).send("note with given ID was not found");

	res.send(result);


});



module.exports = router;
