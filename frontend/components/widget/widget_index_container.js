import { connect } from 'react-redux';
import { fetchUserWidgets } from '../../actions/widget_actions';
import WidgetIndex from './widget_index';
import { selectWidgets } from '../../reducers/selectors';

const mapStateToProps = state => ({
  widgets: selectWidgets(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUserWidgets: (userId) => dispatch(fetchUserWidgets(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetIndex);
