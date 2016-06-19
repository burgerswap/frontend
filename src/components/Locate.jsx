import React, {Component} from 'react';

class Locate extends Component {
  handleKeyThing() {
    window.alert('test');
  }
  render() {
    return (
     <section className>
        <div className = "col-sm-8 col-sm-offset-2 center">
        	<h1> Where are you? </h1>
					<input type="text" placeholder="your location" onKeyUp={() => {this.handleKeyThing()}}></input>
        </div>
     </section>
    )
  }
}


export default Locate;
