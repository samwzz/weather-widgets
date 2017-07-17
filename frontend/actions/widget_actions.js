import * as APIUtil from '../util/widget_api_util';

export const RECEIVE_WIDGETS = "RECEIVE_WIDGETS";
export const RECEIVE_WIDGET = "RECEIVE_WIDGET";
export const RECEIVE_WIDGET_ERROR = 'RECEIVE_WIDGET_ERROR';
export const REMOVE_WIDGET = 'REMOVE_WIDGET';

export const receiveWidgets = widgets => ({
  type: RECEIVE_WIDGETS,
  widgets
});

export const receiveWidget = widget => ({
  type: RECEIVE_WIDGET,
  widget
});

export const removeWidget = widget => ({
  type: REMOVE_WIDGET,
  widget
});

export const receiveWidgetErrors = errors => ({
  type: RECEIVE_WIDGET_ERROR,
  errors
});

export const fetchUserWidgets = userId => dispatch => (
  APIUtil.fetchUserWidgets(userId).then(widgets => (
    dispatch(receiveWidgets(widgets))
  ))
);

export const createWidget = widgetData => dispatch => (
  APIUtil.createWidget(widgetData)
    .then(widget => dispatch(receiveWidget(widget)))
    .fail(err => dispatch(receiveWidgetErrors(err.responseJSON))
  )
);

export const deleteWidget = widgetData => dispatch => (
  APIUtil.deleteWidget(widgetData).then(widget => (dispatch(removeWidget(widget))))
);
