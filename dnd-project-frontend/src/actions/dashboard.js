import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const CHARACTER_ERROR = 'CHARACTER_ERROR';
export const CharacterError = error => ({
    type: CHARACTER_ERROR,
    error
});

export const GET_CHARACTERS = 'GET_CHARACTERS'
export const getCharacters = (characters) => ({
  type: GET_CHARACTERS,
  characters
})

export const getCharactersFromDatabase = (authToken) => (dispatch, getState) => {
  if (!authToken) {
    authToken = getState().auth.authToken;
  }
    return fetch(`${API_BASE_URL}/characters`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        },
    }).then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => dispatch(getCharacters(data)))
    .catch(err => {
      dispatch(CharacterError(err));
    });
}

export const createCharacter = (characterObject) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log("CharacterObject in post action: ",characterObject)
    return fetch(`${API_BASE_URL}/characters`, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json',
        },
        body: JSON.stringify(characterObject)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => {
          dispatch(getCharactersFromDatabase());
        })
        .catch(err => {
          dispatch(CharacterError(err));
        });
};

