import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import dashboardReducer from './reducers/dashboard'


//import new reducer
const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        dashboard: dashboardReducer
    }),
    applyMiddleware(thunk)
);
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}


export default store;
