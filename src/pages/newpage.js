import React, { Component } from 'react';
import Link from 'gatsby-link';

export default class Newpage extends Component {
  render() {
    return (
      <div className="container">
        This is new page
        <Link to="/">Home</Link>
      </div>
    );
  }
}
