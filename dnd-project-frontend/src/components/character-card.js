import React, { Component } from 'react';
import '../styles/character-card.css'


class CharacterCard extends Component {
  
  render() {
    const hardCodedCharacter = {
      name: "Hard Code",
      characterClass : "barbarian",
      race : "human",
      level: 2,
      Strength: 1,
      Dexterity: 2,
      Constitution: 3,
      Intelligence: 4,
      Wisdom:12,
      Charisma:14
    }
    return (
      <div className="character-card-border">
        <div className="character-card">
          Name: {hardCodedCharacter.name} <br></br>
          Class : {hardCodedCharacter.characterClass} <br></br>
          Race : {hardCodedCharacter.race} <br></br>
          Level: {hardCodedCharacter.level} <br></br>
          Strength: {hardCodedCharacter.Strength} <br></br>
          Dexterity: {hardCodedCharacter.Dexterity} <br></br>
          Constitution: {hardCodedCharacter.Charisma} <br></br>
          Intelligence: {hardCodedCharacter.Intelligence} <br></br>
          Wisdom: {hardCodedCharacter.Wisdom} <br></br>
          Charisma:{hardCodedCharacter.Charisma} <br></br>
        </div>
      </div>
    );
  }
}

export default CharacterCard;