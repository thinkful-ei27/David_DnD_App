const express = require('express');
const mongoose = require('mongoose');
const Character = require('../models/character');
const router = express.Router();


router.get('/', (req, res, next) => {
  Character.find()
  .then(results => {
    console.log(results)
    res.json(results);
  })
  .catch(err => {
    next(err)
  })

})

router.get('/:name', (req, res, next) => {
  const { name } = req.params;

  Character.findOne({ name })
    .then(result => {
      if (result) {
        res.json(result);
      } else {
        next();
      }
    })
    .catch(err => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  console.log("Post made it")
  const name = req.body.name;
  console.log("second post made it")
  const characterClass = req.body.characterClass;
  const race = req.body.race;
  const Strength = req.body.Strength;
  const Dexterity = req.body.Dexterity;
  const Constitution = req.body.Constitution;
  const Intelligence = req.body.Intelligence;
  const Wisdom = req.body.Wisdom;
  const Charisma = req.body.Charisma;


  Character.create({
    name,
    characterClass,
    race,
    Strength,
    Dexterity,
    Constitution,
    Intelligence,
    Wisdom,
    Charisma
  })
.then(result => {
  console.log("made it here")
    res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
  })
  .catch(err => {
    if (err.code === 11000) {
      err = new Error('Chilll');
      err.status = 400;
    }
    next(err);
  });
});

module.exports = router;