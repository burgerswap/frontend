import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    return (
     <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
                <span className="sr-only">Toggle navigation</span>
              </button>
              <a className="navbar-brand" href="#">Flat UI</a>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse-01">
              <ul className="nav navbar-nav navbar-left">
                <li><a href="#fakelink">Menu Item<span className="navbar-unread">1</span></a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Messages <b className="caret"></b></a>
                  <span className="dropdown-arrow"></span>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </li>
                <li><a href="#fakelink">About Us</a></li>
               </ul>
            </div>
          </nav>
    )
  }
}

export default Navbar;