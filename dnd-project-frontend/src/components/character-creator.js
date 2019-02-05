import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form'
import '../styles/character-creator.css'
import {createCharacter} from '../actions/dashboard';

class CharacterCreator extends Component {
  onSubmit(values) {

    let Strength  = this.getRoll();
    let Dexterity = this.getRoll();
    let Constitution = this.getRoll();
    let Intelligence = this.getRoll();
    let Wisdom = this.getRoll();
    let Charisma = this.getRoll();
    let level = 1;
    let insertObject = {
      characterClass: values.Class,
      race: values.race,
      name: values.name,
      level,
      Strength,
      Dexterity,
      Constitution,
      Intelligence,
      Wisdom,
      Charisma
    }
    console.log("onSubmit values are: ", insertObject)
    return this.props.dispatch(createCharacter(insertObject))
  } 
  
  getRoll() {
    let value1 = Math.floor(Math.random() * 6 + 1);
    let value2 = Math.floor(Math.random() * 6 + 1);
    let value3 = Math.floor(Math.random() * 6 + 1);
    let value4 = Math.floor(Math.random() * 6 + 1);
    let smallest = Math.min(Math.min(value1, value2), Math.min(value3, value4));
    let total = value1 + value2 + value3 + value4 - smallest;
    return total;
  }

  render() {
    return (
      <div className="character-card-form-box">
        <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} className="inner-form-box">
          <div className="flex-box-div">
            <label>Enter a Name:
            <Field component={"input"} name={"name"}>
            </Field>
            </label>
            <Field component={"select"} name={"Class"}>
              <option value="Random">Random Class</option>
              <option value="Barbarian">Barbarian</option>
              <option value="Bard">Bard</option>
              <option value="Cleric">Cleric</option>
              <option value="Druid">Druid</option>
              <option value="Fighter">Fighter</option>
              <option value="Monk">Monk</option>
              <option value="Paladin">Paladin</option>
              <option value="Ranger">Ranger</option>
              <option value="Rouge">Rouge</option>
              <option value="Sorcerer">Sorcerer</option>
              <option value="Warlock">Warlock</option>
              <option value="Wizard">Wizard</option>
            </Field>
            <Field component={"select"} name={"race"}>
              <option value="Random">Random Race</option>
              <option value="Aarakocra">Aarakocra</option>
              <option value="Aasimar">Aasimar</option>
              <option value="Bugbear">Bugbear</option>
              <option value="Centaur">Centaur</option>
              <option value="Changeling">Changeling</option>
              <option value="Dragonborn">Dragonborn</option>
              <option value="Dwarf">Dwarf</option>
              <option value="Elf">Elf</option>
              <option value="FearlTiefling">FearlTiefling</option>
              <option value="Firblog">Firblog</option>
              <option value="Genasi">Genasi</option>
              <option value="Gith">Gith</option>
              <option value="Gnome">Gnome</option>
              <option value="Goblin">Goblin</option>
              <option value="Goliath">Goliath</option>
              <option value="Half-Elf">Half-Elf</option>
              <option value="Halfing">Halfing</option>
              <option value="Half-Orc">Half-Orc</option>
              <option value="Hobgoblin">Hobgoblin</option>
              <option value="Human">Human</option>
              <option value="Kalashtar">Kalashtar</option>
              <option value="Kenku">Kenku</option>
              <option value="Kobold">Kobold</option>
              <option value="Lizardfolk">Lizardfolk</option>
              <option value="Loxodon">Loxodon</option>
              <option value="Minotaur">Minotaur</option>
              <option value="Orc">Orc</option>
              <option value="Shifter">Shifter</option>
              <option value="SimicHybrid">Simic Hybrid</option>
              <option value="Tabaxi">Tabaxi</option>
              <option value="Tiefling">Tiefling</option>
              <option value="Tortle">Tortle</option>
              <option value="Triton">Triton</option>
              <option value="Vedalken">Vedalken</option>
              <option value="Viashino">Viashino</option>
              <option value="Lizardfolk">Lizardfolk</option>
              <option value="Yuan-tiPureblood">Yuan-tiPureblood</option>
            </Field>
            <button type="submit" className="submit-button">Create Character</button>
            </div>

        </form>
      </div>
    );
  }
}

export default reduxForm({form: 'character'})(CharacterCreator);