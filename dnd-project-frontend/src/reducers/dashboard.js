import {
  CHARACTER_ERROR,
  GET_CHARACTERS,
} from '../actions/dashboard';

const initialState = {
  characterArray:[],
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === CHARACTER_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  } else if (action.type === GET_CHARACTERS) {
    return Object.assign({}, state, {
      characterArray : action.characters
    })
  }
  return state;
}