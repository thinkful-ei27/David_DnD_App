const mongoose = require('mongoose');

const { MONGODB_URI } = require('../config');

const Character = require('../models/character')

const { characters } = require('../db/data');

console.log(`Connecting to mongodb at ${MONGODB_URI}`);
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex : true })
  .then(() => {
    console.info('Deleting Data...');
    return Promise.all([
      Character.deleteMany(),
    ]);
  })
  .then(() => {
    console.info('Seeding Database...');
    return Promise.all([
      Character.insertMany(characters),
    ]);
  })
  .then(results => {
    console.log('Inserted', results);
    console.info('Disconnecting...');
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    return mongoose.disconnect();
  });