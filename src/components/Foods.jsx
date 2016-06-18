import React, {Component} from 'react';

class Foods extends Component {
  render() {
    return (
     <section className>
        <div className="col-sm-8 col-sm-offset-2">
        <h1 className="center"> That's great! There's just a few requirements for quality: </h1>

          <div className="row demo-tiles">

              <div className="tile image">
								<div className="yes">✓</div>
              </div>

							<div className="tile image">
								<div className="no">✗</div>
              </div>

							<div className="tile image">
								<div className="yes">✓</div>
              </div>

							<div className="tile image">
								<div className="no">✗</div>
              </div>

          </div>

					<button>Ok, cool</button>

        </div>
     </section>
    )
  }
}


export default Foods;
