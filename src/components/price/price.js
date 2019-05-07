import React from "react";

export default class Price extends React.Component {
  render() {
    return (
      <section id="pricing" className="section-padding bg-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 m-auto">
              <div className="section-heading">
                <h4 className="section-title">
                  Affordable pricing plan for you
                </h4>
                <p>
                  We have different type of pricing table to choose with your
                  need. Check which one is most suitble for you and your
                  business purpose.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="pricing-block ">
                <div className="price-header">
                  <i className="flaticon-start" />

                  <h4 className="price">
                    <small>$</small>26
                  </h4>
                  <h5>Monthly pack</h5>
                </div>
                <div className="line" />
                <ul>
                  <li>5 GB Bandwidth</li>
                  <li>Highest Speed</li>
                  <li>1 GB Storage</li>
                  <li>Unlimited Website</li>
                  <li>Unlimited Users</li>
                  <li>Data Security and Backups</li>
                  <li>24x7 Great Support</li>
                  <li>Monthly Reports and Analytics</li>
                </ul>

                <a href="#" className="btn btn-hero btn-circled">
                  select plan
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="pricing-block ">
                <div className="price-header">
                  <i className="flaticon-value" />

                  <h4 className="price">
                    <small>$</small>46
                  </h4>
                  <h5>Monthly pack</h5>
                </div>
                <div className="line" />
                <ul>
                  <li>5 GB Bandwidth</li>
                  <li>Highest Speed</li>
                  <li>1 GB Storage</li>
                  <li>Unlimited Website</li>
                  <li>Unlimited Users</li>
                  <li>Data Security and Backups</li>
                  <li>24x7 Great Support</li>
                  <li>Monthly Reports and Analytics</li>
                </ul>

                <a href="#" className="btn btn-hero btn-circled">
                  select plan
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="pricing-block">
                <div className="price-header">
                  <i className="flaticon-idea" />

                  <h4 className="price">
                    <small>$</small>76
                  </h4>
                  <h5>Monthly pack</h5>
                </div>
                <div className="line" />
                <ul>
                  <li>5 GB Bandwidth</li>
                  <li>Highest Speed</li>
                  <li>1 GB Storage</li>
                  <li>Unlimited Website</li>
                  <li>Unlimited Users</li>
                  <li>Data Security and Backups</li>
                  <li>24x7 Great Support</li>
                  <li>Monthly Reports and Analytics</li>
                </ul>

                <a href="#" className="btn btn-hero btn-circled">
                  select plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
