import React from "react";
import client from "../../assets/img/clients/2.jpg";

export default class Partner extends React.Component {
  render() {
    return (
      <section id="clients" className="section-padding ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-3 text-center">
              <div className="client-img">
                <img src={client} alt="partner" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3 text-center">
              <div className="client-img">
                <img src={client} alt="partner" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3 text-center">
              <div className="client-img">
                <img src={client} alt="partner" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3 text-center">
              <div className="client-img">
                <img src={client} alt="partner" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
