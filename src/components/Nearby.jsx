import React, {Component} from 'react';

class Nearby extends Component {
  render() {
    return (
      <section>
        <div className="center">
          <h1>
            There's food near you!
          </h1>

          <div className="row nearby-food">
            <div className="col-sm-4 image"></div>
            <div>
              <h6>Assorted fruits</h6>
              <p>We have some left over fruits that we are not going to eat</p>
              <span>1km away at Sydney CBD until 4pm</span>
              <div className="button-holder"><button>Reserve</button></div>
            </div>
          </div>

          <div className="row nearby-food">
            <div className="col-sm-4 image"></div>
            <div>
              <h6>Assorted fruits</h6>
              <p>We have some left over fruits that we are not going to eat</p>
              <span>1km away at Sydney CBD until 4pm</span>
              <div className="button-holder"><button>Reserve</button></div>
            </div>
          </div>

          <div className="row nearby-food">
            <div className="col-sm-4 image"></div>
            <div>
              <h6>Assorted fruits</h6>
              <p>We have some left over fruits that we are not going to eat</p>
              <span>1km away at Sydney CBD until 4pm</span>
              <div className="button-holder"><button>Reserve</button></div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default Nearby;
