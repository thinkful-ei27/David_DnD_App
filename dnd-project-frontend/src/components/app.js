import React, { Component } from 'react';
import CharacterSidebar from './character-sidebar';
import CharacterCards from './character-cards';
import SpellSidebar from './spell-siderbar';

class App extends Component {
  render() {
    return (
   <div>
      <CharacterCards/>
      <CharacterSidebar />
      <SpellSidebar />
   </div>
    );
  }
}

export default App;
