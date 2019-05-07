import React from "react";

export default class Banner extends React.Component {
  render() {
    return (
      <div className="banner-area banner-1">
        <div className="overlay gr-overlay" />
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 m-auto text-center col-sm-12 col-md-12">
                  <div className="banner-content content-padding">
                    <h5 className="subtitle">A creative agency</h5>
                    <h1 className="banner-title">
                      We craft seo and digital markting services
                    </h1>
                    <p>
                      We provide marketing services to startups and small
                      businesses to looking for a partner for their digital
                      media, design-area.We are a a startup company to be
                      commited to work and time management.
                    </p>

                    <a href="#" className="btn btn-white btn-circled">
                      lets start
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
