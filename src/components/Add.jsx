import React, {Component} from 'react';

class Add extends Component {
  render() {
    return (
     <section className>
        <div className = "col-sm-12 center">
        	<h2> What would you like to share? </h2>

					<input type="text" placeholder="a description"></input>

        </div>
     </section>
    )
  }
}


export default Add;
