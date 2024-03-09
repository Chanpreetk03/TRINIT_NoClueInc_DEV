import { combineReducers } from 'redux';

// Import your individual reducers here
import userReducer from './userReducer';

// Combine reducers
const rootReducer = combineReducers({
    user: userReducer,
  // Add more reducers here as needed
});

export default rootReducer;
