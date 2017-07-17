import React from 'react';
import { withRouter } from 'react-router';

class WidgetIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.getWeather(this.props.widget.location);
  }

  getWeather(location) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9bc59fb746e8550feffb5efbfa3ef820`;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xmlhttp.responseText);
        this.setState({weather: data});
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  handleDelete(e) {
    e.preventDefault();
    const { widget, deleteWidget } = this.props;
    deleteWidget(widget);
  }

  renderIcon() {
    let weather = this.state.weather;
    let icon = <div></div>;
    switch (weather.weather[0].main) {
      case "Clear":
        icon = <div><i className="wi wi-day-sunny"></i></div>;
        break;
      case "Clouds":
        icon = <div><i className="wi wi-cloudy"></i></div>;
        break;
      case "Mist":
        icon = <div><i className="wi wi-fog"></i></div>;
        break;
      case "Haze":
        icon = <div><i className="wi wi-day-haze"></i></div>;
        break;
      case "Rain":
        icon = <div><i className="wi wi-rain"></i></div>;
        break;
      default:
        icon = <div><i className="wi wi-day-sunny"></i></div>;
    }
    return icon;
  }

  render() {
    let content = <div></div>;
    console.log(this.state.weather);
    if (this.state.weather) {
      let weather = this.state.weather;
      let temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div className="weather-content">
                  <div className="weather-info">
                    <p className="name">{weather.name}</p>
                    <p className="temp">{temp.toFixed(1)} F</p>
                    <p className="desc">{weather.weather[0].main}</p>
                  </div>
                  {this.renderIcon()}
                </div>;
    } else {
     content = <div className='loading'>loading weather...</div>;
    }
    return (
      <div className="weather-container">
          <div className='weather'>
            {content}
            <button className="delete-button" onClick={ this.handleDelete }>
              Remove
            </button>
          </div>
      </div>
    );
  }
}

export default WidgetIndexItem;
