import React, { Component } from 'react';
import CharacterCard from './character-card'
import '../styles/character-cards.css'

class CharacterCards extends Component {
  render() {
    return (
      <div className="character-card-display">
        <div className="scroll-left-box"/>
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard/>
        <div className="scroll-right-box"/>
      </div>
    );
  }
}

export default CharacterCards;