import React, {Component} from 'react';

class Home extends Component {
  render() {
    return (
     <section className>
        <div className = "col-sm-8 col-sm-offset-2">
        <h1 className="center"> Share, don't waste. </h1>
        <h4 className="overview">Bought too much? Have left over food? We believe you could share it instead of throwing it in the bin.</h4>

          <div className="row">

            <div className="col-xs-4 col-xs-offset-1 move-down">
              <img src="/media/have.png" />
              <button className="btn btn-block btn-lg btn-primary move-down">I have some food to share</button>
            </div>

            <div className="col-xs-4 col-xs-offset-2 move-down">
              <img src="/media/want.png" />
              <button className="btn btn-block btn-lg btn-primary move-down">I'd like some food please</button>
            </div>

          </div>
        </div>
     </section>
    )
  }
}


export default Home;
