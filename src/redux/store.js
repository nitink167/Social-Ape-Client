//Importing Redux Stuff
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

//Importing Reducers
import userReducer from './reducers/userReducer';
import uiReducer from './reducers/uiReducer';
import dataReducer from './reducers/dataReducer';

const initialState = {};

const middleware = [thunk];

//Combining Reducers
const reducers = combineReducers({
		user: userReducer,
		data: dataReducer,
		UI: uiReducer
})

const store = createStore(
	reducers,
	initialState,
	compose(
		applyMiddleware(...middleware)
	)
)

export default store;
