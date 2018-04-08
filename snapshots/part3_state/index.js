import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
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
      activePlace: 0,
    };
  }

  render() {
    const activePlace = this.state.activePlace;
    return (
      <div>
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
          }}>
            {place.name}
          </button>
        ))}
        <WeatherDisplay key={activePlace} cityId={PLACES[activePlace].id} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
