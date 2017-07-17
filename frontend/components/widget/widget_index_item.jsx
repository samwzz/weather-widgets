import React from 'react';
import { withRouter } from 'react-router';

class WidgetIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    };
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

  render() {
    let content = <div></div>;
    console.log(this.state.weather);
    if (this.state.weather) {
      let weather = this.state.weather;
      let temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div className="weather-info">
                 <p>{weather.name}</p>
                 <p>{temp.toFixed(1)} F</p>
                 <p>{weather.weather[0].description}</p>
               </div>;
    } else {
     content = <div className='loading'>loading weather...</div>;
    }
    return (
      <div className="weather-container">
        <h1>Weather</h1>
          <div className='weather'>
            {content}
          </div>
      </div>
    );
  }
}

export default WidgetIndexItem;
