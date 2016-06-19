import React, {Component} from 'react';

class Foods extends Component {
  render() {
    return (
     <section className>
        <div className="col-sm-8 col-sm-offset-2">
        	<h1 className="center"> That's great! There's just a few requirements for quality: </h1>
          <div className="row">

						<div className="yesses ib col-sm-3">
							We can accept fresh fruits as well as canned goods.
						</div>

						<div className="col-sm-6 ib">
							<img src="/media/foods.png"/>
						</div>

						<div className="nos ib col-sm-3">
							We can't accept spoiled or cooked foods.
						</div>

          </div>

					<div className="row">
						<div className="col-sm-offset-5 col-sm-2">
							<button className="btn btn-block btn-lg">Proceed</button>
						</div>
					</div>

        </div>


     </section>
    )
  }
}


export default Foods;
