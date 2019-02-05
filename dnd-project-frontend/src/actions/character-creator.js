import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const POST_CHARACTER = 'POST_CHARACTER ';
export const postCharacter = data => ({
    type: POST_CHARACTER,
    data
});

export const POST_CHARACTER_ERROR = 'POST_CHARACTER _ERROR';
export const postCharacterError = error => ({
    type: POST_CHARACTER_ERROR,
    error
});

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/protected`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(postCharacter(data)))
        .catch(err => {
            dispatch(postCharacterError(err));
        });
};