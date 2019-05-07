import React from "react";
import blog from "../../assets/img/blog/2.jpg";

export default class Blog extends React.Component {
  render() {
    return (
      <section id="blog" className="section-padding bg-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 m-auto">
              <div className="section-heading">
                <h4 className="section-title">Latest Blog news</h4>
                <div className="line" />
                <p>
                  Our blog journey may come handy to build a community to make
                  more effective success for business. Latest and trend tricks
                  will help a lot{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="blog-block ">
                <img src={blog} alt="" className="img-fluid" />
                <div className="blog-text">
                  <h6 className="author-name">
                    <span>Tips and tricks</span>john Doe
                  </h6>
                  <a href="blog-single.html" className="h5 my-2 d-inline-block">
                    Best tips to grow your content quality and standard.
                  </a>
                  <p>
                    If you want to grow your content quality and standard you
                    should foolow these tips properly voluptatibus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="blog-block ">
                <img src={blog} alt="" className="img-fluid" />
                <div className="blog-text">
                  <h6 className="author-name">
                    <span>Branding</span>john Doe
                  </h6>
                  <a href="blog-single.html" className="h5 my-2 d-inline-block">
                    Brand your site at top in few minuts.
                  </a>
                  <p>
                    Brand your site at top, boost your audioance corporis
                    facilis animi voluptas alias ex saepe quo voluptatibus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="blog-block ">
                <img src={blog} alt="" className="img-fluid" />
                <div className="blog-text">
                  <h6 className="author-name">
                    <span>Marketing</span>john Doe
                  </h6>
                  <a href="blog-single.html" className="h5 my-2 d-inline-block">
                    How to become a best sale <br />
                    marketer in a year!
                  </a>
                  <p>
                    Becomeing a best sale marketer is not easy but not
                    impossible too.Need to follow up some proper guidance and
                    strategy .
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
