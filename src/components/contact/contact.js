import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <section id="contact" className="section-padding ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-mfd-12">
              <div className="section-heading">
                <h4 className="section-title">Get in touch</h4>
                <p>
                  Have a project on mind,want to make an consultant. Don't
                  hesistate to contact us.Let's have atalk together.Colaborat
                  eyour project to done quickly
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-sm-12 m-auto">
              <div className="contact-form ">
                <form className="contact__form" method="post" action="mail.php">
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="alert alert-success contact__msg"
                        // style="display: none"
                        role="alert"
                      >
                        Your message was sent successfully.
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        name="subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="6"
                        placeholder="Message"
                        required
                      />
                    </div>
                    <div className="col-12 text-center">
                      <input
                        name="submit"
                        type="submit"
                        className=" btn btn-hero btn-circled"
                        value="Send Message"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
