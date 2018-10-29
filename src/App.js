import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Featured from './components/featured/Featured';
import VenueInfo from './components/venue/VenueInfo';
import Highlights from './components/venue/Highlights';
import Pricing from './components/venue/Pricing';
import Location from './components/venue/Location';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: '1500px', backgroundColor: 'grey' }}
      >
        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="info">
          <VenueInfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
