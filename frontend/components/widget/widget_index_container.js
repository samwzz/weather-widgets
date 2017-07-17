import { connect } from 'react-redux';
import { fetchUserWidgets, deleteWidget } from '../../actions/widget_actions';
import WidgetIndex from './widget_index';
import { selectWidgets } from '../../reducers/selectors';

const mapStateToProps = state => ({
  widgets: selectWidgets(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUserWidgets: (userId) => dispatch(fetchUserWidgets(userId)),
  deleteWidget: widget => dispatch(deleteWidget(widget))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetIndex);
