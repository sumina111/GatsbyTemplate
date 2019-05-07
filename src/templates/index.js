import React from "react";

// import {
//   Container,
//   Card,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardSubtitle
// } from "reactstrap";
// import Link from "gatsby-link";
// import { graphql } from 'gatsby'
// import Layout from "../components/layout";
// import Contact from "../pages/contact";

import "../assets/bootstrap/css/bootstrap.css";
import "../assets/fonts/flaticon/flaticon.css";
import "../assets/css/all.css";
import "../assets/css/icofont.css";
import "../assets/css/animate.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

// import "../assets/bootstrap/css/bootstrap-grid.css";
// import "../assets/bootstrap/css/bootstrap-grid.css.map";
// import "../assets/bootstrap/css/bootstrap-grid.min.css";
// import "../assets/bootstrap/css/";
// import "../assets/bootstrap/css/";
// import "../assets/bootstrap/css/";
// import "../assets/bootstrap/css/";

import NavBar from "../components/navBar/navBar";
import Banner from "../components/banner/banner";
import About from "../components/about/about";
import AboutUs from "../components/aboutus/aboutUs";
import Service from "../components/service/service";
import ServiceArea from "../components/serviceArea/serviceArea";
import Price from "../components/price/price";
import Testimonial from "../components/testimonial/testimonial";
import Partner from "../components/partner/partner";
import Blog from "../components/blog/blog";
import Contact from "../components/contact/contact";
import Counter from "../components/counter/counter";
import Footer from "../components/footer/footer";

const IndexPage = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />
      <AboutUs />
      <Service />
      <ServiceArea />
      <Price />
      <Testimonial />
      <Partner />
      <Blog />
      <Contact />
      <Counter />
      <Footer />
    </div>
  );
};

export default IndexPage;

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           frontmatter {
//             title
//             contentType
//             date(formatString: "MMMM DD, YYYY")
//             path
//             hidden
//           }
//         }
//       }
//     }
//   }
// `
