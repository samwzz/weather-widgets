import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

class WidgetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      widgetable_id: this.props.currentUser.id,
      widgetable_type: "User"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const widget = merge({}, this.state);
    this.props.createWidget({ widget }).then(
      () => this.setState({
        location: ""
      })
    );
  }

  render() {
    return(
      <form className="widget-form" onSubmit={ this.handleSubmit }>
        <h3 className="form-title">Create New Widget</h3>
        <label className="input-label">
          <span>Location:</span>
          <input className="input"
            value={ this.state.location }
            onChange={ this.update('location') }
          />
        </label>
        <button className="submit-button">Submit</button>
      </form>
    );
  }
}

export default withRouter(WidgetForm);
