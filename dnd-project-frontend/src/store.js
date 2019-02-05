import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
//import new reducer
const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer
    }),
    applyMiddleware(thunk)
);

export default store;
