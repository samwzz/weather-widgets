import { merge } from 'lodash';
import { RECEIVE_WIDGETS, RECEIVE_WIDGET, REMOVE_WIDGET, RECEIVE_WIDGET_ERRORS } from '../actions/widget_actions';

const defaultWidget = Object.freeze({
  0: {
    id: 0,
    location: "",
    errors: []
  }
});

const WidgetReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_WIDGETS:
      return action.widgets;
    case RECEIVE_WIDGET:
      const newWidget = {[action.widget.id]: action.widget};
      return merge({}, state, newWidget);
    case RECEIVE_WIDGET_ERRORS:
      const errors = action.errors;
      return merge({}, { errors });
    case REMOVE_WIDGET:
      nextState = merge({}, state);
      delete nextState[action.widget.id];
      return nextState;
    default:
      return state;
  }
};

export default WidgetReducer;
