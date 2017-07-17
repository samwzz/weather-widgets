import { connect } from 'react-redux';
import { createWidget } from '../../actions/widget_actions';
import WidgetForm from './widget_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createWidget: (widget) => dispatch(createWidget(widget))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetForm);
