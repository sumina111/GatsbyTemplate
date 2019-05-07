import React from "react";

export default class Counter extends React.Component {
  render() {
    return (
      <section id="counter" className="section-padding">
        <div className="overlay dark-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="counter-stat">
                <i className="icofont icofont-heart" />
                <span className="counter">460</span>
                <h5>Our Happy Clients</h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="counter-stat">
                <i className="icofont icofont-rocket" />
                <span className="counter">60</span>
                <h5>Projects Done</h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="counter-stat">
                <i className="icofont icofont-hand-power" />
                <span className="counter">30</span>
                <h5>Experienced stuff</h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="counter-stat">
                <i className="icofont icofont-shield-alt" />
                <span className="counter">25</span>
                <h5>Ongoning Projects</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
