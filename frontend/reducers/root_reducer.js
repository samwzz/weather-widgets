import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import WidgetReducer from './widget_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  widgets: WidgetReducer
});

export default rootReducer;
