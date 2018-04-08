import React, { Component } from 'react';
export default class WeatherDisplay extends Component {
  render() {
    return (
      <h1>Displaying weather for city id {this.props.id}</h1>
    );
  }
}
