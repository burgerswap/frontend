import React, {Component} from 'react';
import Hero from './Hero.jsx';
import Navbar from './Navbar.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
      </div>
    )
  }
}

export default App;