import React, {Component} from 'react';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    )
  }
}

export default App;