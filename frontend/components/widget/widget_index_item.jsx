import React from 'react';
import { withRouter } from 'react-router';

class WidgetIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props.widget;
    return (
      <div>
        <li>{location}</li>
      </div>
    );
  }
}

export default WidgetIndexItem;
