const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const users = require('./routes/users');
const tickets = require('./routes/tickets');
const offers = require('./routes/offers');
const issues = require('./routes/issues');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/testdb')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json());
app.use('/api/users', users);
app.use('/api/tickets', tickets);
app.use('/api/offers', offers);
app.use('/api/issues', issues);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
