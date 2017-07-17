import React from 'react';
import WidgetIndexItem from './widget_index_item';
import WidgetFormContainer from '../widget_form/widget_form_container';

class BenchIndex extends React.Component {
  componentWillMount() {
    this.props.fetchUserWidgets(this.props.currentUser.id);
  }

  render () {
    return (
      <div>
        <div className="widget-container">
          { this.props.widgets.map(widget => (
            <WidgetIndexItem widget={widget} deleteWidget={this.props.deleteWidget} key={widget.id} />
          ))}
          <WidgetFormContainer />
        </div>
      </div>
    );
  }
}

export default BenchIndex;
