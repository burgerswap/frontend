import React, {Component} from 'react';

class Locate extends Component {
  render() {
    return (
     <section className>
        <div className = "col-sm-8 col-sm-offset-2 center">
        	<h1> Where are you? </h1>

					<input type="text" placeholder="your location"></input>

        </div>
     </section>
    )
  }
}


export default Locate;
