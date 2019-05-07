import React, { Component } from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default class Sailesh extends Component {
  render() {
    console.log(this.props);
    const {
      data: {
        markdownRemark: { frontmatter, html }
      }
    } = this.props;
    const { title, contentType, path } = frontmatter;
    return (
      <Layout>
        <h1>{title}</h1>
        <Link to="/">
          {contentType} {path}
        </Link>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: { contentType: { eq: "sailesh" } }) {
      frontmatter {
        title
        contentType
        path
      }
      html
    }
  }
`;
