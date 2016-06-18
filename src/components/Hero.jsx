import React, {Component} from 'react';

class Hero extends Component {
  render() {
    return (
     <section className>
        <div className = "col-sm-8 col-sm-offset-2">
        <h1 className="center"> Hello and Welcome to BurgerSwap </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque fermentum dignissim velit pretium hendrerit.
        Integer consectetur vulputate quam et gravida. Vestibulum facilisis velit porta,
        congue elit sit amet, viverra dui. Quisque ut pharetra urna, a tempor odio.
        Praesent rhoncus ex quam, a varius quam congue et. Aliquam erat volutpat.
        Nulla facilisi. Aliquam erat volutpat. Etiam sollicitudin,
        quam at porttitor vestibulum, justo ante auctor nisl, vitae aliquet justo purus ac velit.
        Fusce quam neque, dapibus quis erat ac, feugiat feugiat tellus.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
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


export default Hero;