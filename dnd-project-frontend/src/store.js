import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
//import new reducer
const store = createStore(
    combineReducers({
        form: formReducer,
        //put new reducer here
    }),
    applyMiddleware(thunk)
);

export default store;
