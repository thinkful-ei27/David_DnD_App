import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form'

class CharacterCreator extends Component {
  render() {
    return (
      <div className="CharacterCard">
        <form>
          <Field component={"input"} name={"name-input"} >
          </Field>
        </form>
      </div>
    );
  }
}

export default reduxForm({form: 'character'})(CharacterCreator);