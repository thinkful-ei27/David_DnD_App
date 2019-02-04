import React, { Component } from 'react';
import CharacterSidebar from './character-sidebar';
import CharacterCards from './character-cards';
import SpellSidebar from './spell-siderbar';
import CharacterCreator from './character-creator';

class App extends Component {
  render() {
    return (
   <div>
     <CharacterCreator/>
     <CharacterCards/>
   </div>
    );
  }
}

export default App;
