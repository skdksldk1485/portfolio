import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from 'components/Layout/Header/Header';
import About from 'components/About/About';
import Layout from 'components/Layout/Layout';
import Project from 'components/Project/Project';


const IndexPage: React.FC = () => (
  <Layout>
    <Header />
    <About />
    <Project />
  </Layout>
);

export default IndexPage
