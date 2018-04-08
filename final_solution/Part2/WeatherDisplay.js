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
    const weather = weatherData.weather[0];
    const iconUrl = "https://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>Current: {weatherData.main.temp}°</p>
        <p>Highest: {weatherData.main.temp_max}°</p>
        <p>Lowest: {weatherData.main.temp_min}°</p>
        <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
      </div>
    );
  }
}
