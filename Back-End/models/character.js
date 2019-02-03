const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  characterClass :{ type: String, required: true },
  race: { type: String, required: true },
  Strength: {type: Number, required: true},
  Dexterity: {type: Number, required: true},
  Consitution: {type: Number, required: true},
  Intelligence: {type: Number, required: true},
  Wisdom: {type: Number, required: true},
  Charisma: {type: Number, required: true
}
});
 
characterSchema.set('timestamps', true);

characterSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
  }
});

module.exports = mongoose.model('Character', characterSchema);
