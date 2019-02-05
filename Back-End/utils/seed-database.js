const mongoose = require('mongoose');

const { DATABASE_URL } = require('../config');

const Character = require('../models/character');
const User = require('../models/user')

const { characters, users} = require('../db/data');

console.log(`Connecting to mongodb at ${DATABASE_URL}`);
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useCreateIndex : true })
  .then(() => {
    console.info('Deleting Data...');
    return Promise.all([
      Character.deleteMany(),
    ]);
  })
  .then(() => {
    console.info('Seeding Database...');
    return Promise.all([
      Character.insertMany(characters)
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