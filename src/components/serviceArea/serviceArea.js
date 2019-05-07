import React from "react";
import icon from "../../assets/img/icon/002-target.png";

export default class ServiceArea extends React.Component {
  render() {
    return (
      <section id="service">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="service-box">
                <div className="service-img-icon">
                  <img src={icon} alt="service-icon" className="img-fluid" />
                </div>
                <div className="service-inner">
                  <h4>Video Marketing</h4>
                  <p>
                    Reach a huge area of users and get a publicty of your
                    product and service ,<span>video marketing</span> solution.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="service-box ">
                <div className="service-img-icon">
                  <img src={icon} alt="service-icon" className="img-fluid" />
                </div>
                <div className="service-inner">
                  <h4>Email Marketing</h4>
                  <p>
                    Email Marketing is a great solution to reach a{" "}
                    <span>high range of customers</span> eagrerly waiting to get
                    a service.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="service-box">
                <div className="service-img-icon">
                  <img src={icon} alt="service-icon" className="img-fluid" />
                </div>
                <div className="service-inner">
                  <h4>SEO optimization</h4>
                  <p>
                    we provide wide range of<span> seo service</span> to make
                    your site at top to reach your target customers provided.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="service-box">
                <div className="service-img-icon">
                  <img src={icon} alt="service-icon" className="img-fluid" />
                </div>
                <div className="service-inner">
                  <h4>Custom Website</h4>
                  <p>
                    We provide <span>custom website</span> for any small and
                    large company web based service in large compact package.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="service-box">
                <div className="service-img-icon">
                  <img src={icon} alt="service-icon" className="img-fluid" />
                </div>
                <div className="service-inner">
                  <h4>Content Growth</h4>
                  <p>
                    Content is king,Having a blog site and want to{" "}
                    <span>build content</span> make a platform of earning too we
                    assist you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="service-box">
                <div className="service-img-icon">
                  <img src={icon} alt="service-icon" className="img-fluid" />
                </div>
                <div className="service-inner">
                  <h4>Link Building </h4>
                  <p>
                    Want to grow your <span>potential visitor</span> your site
                    to make it more effective and succesful business .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
