import React, { Component } from 'react';
export default class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }

  componentDidMount() {
    const cityId = this.props.cityId;
    const URL = "https://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&appid=a9541640d21304988f5a84de4bea6e50&units=metric"
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading...</div>;
    return <div>
    <h1>Displaying weather for city {this.props.cityId}</h1>
    {JSON.stringify(weatherData)}
    </div>;
  }
}
