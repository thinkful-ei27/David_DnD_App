const express = require('express');
const mongoose = require('mongoose');
const { PORT, MONGODB_URI } = require('./config');
const charactersRouter = require('./routes/characters')
const app = express();

 app.use(express.static('public'));

app.use('/characters', charactersRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Custom Error Handler
app.use((err, req, res, next) => {
  if (err.status) {
    const errBody = Object.assign({}, err, { message: err.message });
    res.status(err.status).json(errBody);
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

if (require.main === module) {
  // Connect to DB and Listen for incoming connections
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex : true })
    .then(instance => {
      const conn = instance.connections[0];
      console.info(`Connected to: mongodb://${conn.host}:${conn.port}/${conn.name}`);
    })
    .catch(err => {
      console.error(err);
    });

  app.listen(PORT, function () {
    console.info(`Server listening on ${this.address().port}`);
  }).on('error', err => {
    console.error(err);
  });
}

module.exports = app; 