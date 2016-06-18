import React, {Component} from 'react';

class Home extends Component {
  render() {
    return (
     <section className>
        <div className = "col-sm-8 col-sm-offset-2">
        <h1 className="center"> Share, don't waste. </h1>
        <h4>Bought too much? Have left over food? We believe you could share it instead of throwing it in the bin.</h4>
        <ul>
          <li>4,000,000 tonnes of food each year is wasted in Australia. Thats $8 billion.</li>
          <li>>20% of fruits and vegetables are rejected</li>
          <li>Best-before is different to use-by</li>
        </ul>
          <div className="row demo-tiles">
            <div className="col-xs-6">
              <div className="tile">
                <img src="http://res.freestockphotos.biz/pictures/15/15472-illustration-of-a-green-shopping-bag-pv.png" alt="Infinity-Loop" className="tile-image" />
                <a className="btn btn-primary btn-large btn-block" href="http://designmodo.com/flat">I have some food to share</a>
              </div>
            </div>

            <div className="col-xs-6">
              <div className="tile">
                <img src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-food-beverage/055574-3d-transparent-glass-icon-food-beverage-knife-fork3.png" alt="Pensils" className="tile-image" />
                <a className="btn btn-primary btn-large btn-block" href="http://designmodo.com/flat">I'd like some food please</a>
              </div>
            </div>
          </div>
        </div>
     </section>
    )
  }
}


export default Home;
