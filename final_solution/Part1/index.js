import React, { Component } from 'react';
import { render } from 'react-dom';
import WeatherDisplay from './WeatherDisplay';
import './style.css';

const PLACES = [
  { name: "Uppsala", id: "2666218" },
  { name: "Stockholm", id: "2673722" },
  { name: "Göteborg", id: "2711533" },
  { name: "Lund", id: "2693678" },
  { name: "Linköping", id: "2694759" },
  { name: "Umeå", id: "602149" }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              console.log('Clicked index '+index);
          }}>
            {place.name}
          </button>
        ))}
        <WeatherDisplay id={"12345"} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
