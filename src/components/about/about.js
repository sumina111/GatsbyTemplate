import React from "react";
import banner from "../../assets/img/banner/why-choose.png";

export default class About extends React.Component {
  render() {
    return (
      <section id="intro" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12">
              <div className="section-heading">
                <p className="lead">
                  We are creative digital marketing agency with expertise to
                  grow any business that need proper guidance and a committed
                  service.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5  d-none d-lg-block col-sm-12">
              <div className="intro-img">
                <img src={banner} alt="intro-img" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-md-6">
                  <div className="intro-box">
                    <span>01.</span>
                    <h4>Management</h4>
                    <p>
                      we founded September with the goal of creating meaningful
                      digital experiences that connect with people.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6">
                  <div className="intro-box">
                    <span>02.</span>
                    <h4>Strategy</h4>
                    <p>
                      We’re full service which means we’ve got you covered on
                      design & content right through to digital.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6">
                  <div className="intro-box">
                    <span>03.</span>
                    <h4>Experience</h4>
                    <p>
                      You’ll form a lasting relationship with us, collaboration
                      is central to we do.Digital experiences connect people.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6">
                  <div className="intro-box">
                    <span>04.</span>
                    <h4>Build</h4>
                    <p>
                      Technology and design are the core of success for real
                      estate related businesses. Leverage our years.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="intro-cta">
                    <p className="lead ">
                      Still have any question on mind ?{" "}
                      <a href="#contact" className="smoth-scroll">
                        Contact us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
