import React, { Component } from 'react';
import { render } from 'react-dom';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
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
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              My Simple React Weather App
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav
                bsStyle="pills"
                stacked
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
              >
                {PLACES.map((place, index) => (
                  <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={activePlace} cityId={PLACES[activePlace].id} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
