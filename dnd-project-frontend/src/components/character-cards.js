import React, { Component } from 'react';
import CharacterCard from './character-card'
import {connect} from 'react-redux';
import '../styles/character-cards.css'

class CharacterCards extends Component {
  render() {
    console.log(` Character Data: `, this.props.characterData)
    return (
      <div className="character-card-display">
        <div className="scroll-left-box"/>
        {this.props.characterData.map(char => <CharacterCard character={char}/>)}
        <div className="scroll-right-box"/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characterData: state.dashboard.characterArray
});

export default connect(mapStateToProps)(CharacterCards)