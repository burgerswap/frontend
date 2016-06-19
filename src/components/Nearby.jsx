import React, {Component} from 'react';

class Nearby extends Component {
  render() {
    return (
      <section>
        <div className="col-sm-8 col-sm-offset-2">
          <h1>
            There's food near you!
          </h1>

          <div className="row nearby-food">
            <div className="tile image"></div>
            <div className="description">
              <h6>Assorted fruits</h6>
              <p>We have some left over fruits that we are not going to eat</p>
              <span>1km away at Sydney CBD until 4pm</span>
            </div>
            <button>Reserve</button>
          </div>

          <hr/>

          <div className="row nearby-food">
            <div className="tile image"></div>
            <div className="description">
              <h6>Assorted fruits</h6>
              <p>We have some left over fruits that we are not going to eat</p>
              <span>1km away at Sydney CBD until 4pm</span>
            </div>
            <button>Reserve</button>
          </div>

          <hr/>

          <div className="row nearby-food">
            <div className="tile image"></div>
            <div className="description">
              <h6>Assorted fruits</h6>
              <p>We have some left over fruits that we are not going to eat</p>
              <span>1km away at Sydney CBD until 4pm</span>
            </div>
            <button>Reserve</button>
          </div>

        </div>
      </section>
    )
  }
}

export default Nearby;
