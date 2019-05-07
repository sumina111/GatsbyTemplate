import React from "react";

export default class AboutUs extends React.Component {
  render() {
    return (
      <section id="about" className="bg-light">
        <div className="about-bg-img d-none d-lg-block d-md-block" />
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-md-8">
              <div className="about-content">
                <h5 className="subtitle">About us</h5>
                <h3>
                  We are making beautiful <br />
                  design layout for your business
                </h3>
                <p>
                  We craft beautiful website layout from scratch.You need not to
                  worry about site design and other technial issue.We provide
                  these attractive service as a bonus.Let's have atalk together
                  for your next project.
                </p>

                <ul className="about-list">
                  <li>
                    <i className="icofont icofont-check-circled" /> Responsive
                    site
                  </li>

                  <li>
                    <i className="icofont icofont-check-circled"> </i> Latest
                    bootstrap 4
                  </li>

                  <li>
                    <i className="icofont icofont-check-circled"> </i> Modern
                    and clean design
                  </li>
                  <li>
                    <i className="icofont icofont-check-circled"> </i> Working
                    contact form
                  </li>
                  <li>
                    <i className="icofont icofont-check-circled"> </i> Premium
                    services and support
                  </li>
                  <li>
                    <i className="icofont icofont-check-circled" /> Cross
                    browser compatiabilty
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
