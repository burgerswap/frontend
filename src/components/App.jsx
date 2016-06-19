import React, {Component} from 'react';
import Logo from './Logo.jsx';
import Home from './Home.jsx';
import Locate from './Locate.jsx';
import Foods from './Foods.jsx';
import Nearby from './Nearby.jsx';

class App extends Component {
  render() {
    return (
      <div className="app-container center">
        <Logo />
        <Home />
      </div>
    )
  }
}

export default App;
