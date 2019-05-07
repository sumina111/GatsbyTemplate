import React from "react";

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          {/* <link
            rel="stylesheet"
            href="assets/bootstrap/css/bootstrap.css"
            type="text/css"
          /> */}

          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          <script src="/admin/netlify_redirect.js" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          <script src="/script.js" />
          <script src="assets/js/jquery.min.js" />
          <script src="assets/js/contact.js" />
          <script src="assets/js/popper.min.js" />
          <script src="assets/js/bootstrap.min.js" />
          <script src="assets/js/jquery.waypoints.js" />
          <script src="assets/js/jquery.counterup.min.js" />

          <script src="assets/js/jquery.easing.1.3.js" />
          <script src="assets/js/wow.min.js" />
          <script src="assets/js/custom.js" />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
