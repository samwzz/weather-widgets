import React from 'react';
import WidgetIndexItem from './widget_index_item';

class BenchIndex extends React.Component {
  componentWillMount() {
    this.props.fetchUserWidgets(this.props.currentUser.id);
  }

  render () {
    return (
      <div>
        <h1>Widgets: </h1>
        { this.props.widgets.map(widget => (
          <WidgetIndexItem widget={widget} key={widget.id} />
        ))}
      </div>
    );
  }
}

export default BenchIndex;
