import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
// import benchesReducer from './benches_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  // benches: benchesReducer
});

export default rootReducer;
