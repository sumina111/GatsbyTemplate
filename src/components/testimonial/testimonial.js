import React from "react";
import author from "../../assets/img/author/3b.jpg";

export default class Testimonial extends React.Component {
  render() {
    return (
      <section id="testimonial" className="section-padding ">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto col-sm-12 col-md-12">
              <div className="carousel slide" id="test-carousel2">
                <div className="carousel-inner">
                  <ol className="carousel-indicators">
                    <li
                      data-target="#test-carousel2"
                      data-slide-to="0"
                      className="active"
                    />
                    <li data-target="#test-carousel2" data-slide-to="1" />
                    <li data-target="#test-carousel2" data-slide-to="2" />
                  </ol>

                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-lg-12 col-sm-12">
                        <div className="testimonial-content style-2">
                          <div className="author-info ">
                            <div className="author-img">
                              <img src={author} alt="" className="img-fluid" />
                            </div>
                          </div>

                          <p>
                            <i className="icofont icofont-quote-left" />
                            They is a great platform to anyone like who want to
                            start buisiness but not get right decision. It’s
                            really great placefor new to start the buisness in
                            righ way!{" "}
                            <i className="icofont icofont-quote-right" />
                          </p>
                          <div className="author-text">
                            <h5>Marine Joshi</h5>
                            <p>Senior designer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="row">
                      <div className="col-lg-12 col-sm-12">
                        <div className="testimonial-content style-2">
                          <div className="author-info ">
                            <div className="author-img">
                              <img src={author} alt="" className="img-fluid" />
                            </div>
                          </div>

                          <p>
                            <i className="icofont icofont-quote-left" />
                            They is a great platform to anyone like who want to
                            start buisiness but not get right decision. It’s
                            really great placefor new to start the buisness in
                            righ way!{" "}
                            <i className="icofont icofont-quote-right" />
                          </p>
                          <div className="author-text">
                            <h5>Marine Joshi</h5>
                            <p>Senior designer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item ">
                    <div className="row">
                      <div className="col-lg-12 col-sm-12">
                        <div className="testimonial-content style-2">
                          <div className="author-info ">
                            <div className="author-img">
                              <img src={author} alt="" className="img-fluid" />
                            </div>
                          </div>

                          <p>
                            <i className="icofont icofont-quote-left" />
                            They is a great platform to anyone like who want to
                            start buisiness but not get right decision. It’s
                            really great placefor new to start the buisness in
                            righ way!
                            <i className="icofont icofont-quote-right" />
                          </p>
                          <div className="author-text">
                            <h5>Marine Joshi</h5>
                            <p>Senior designer</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
