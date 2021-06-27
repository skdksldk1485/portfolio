import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from 'components/Layout/Header/Header';
import About from 'components/About/About';
import Layout from 'components/Layout/Layout';


const IndexPage: React.FC = () => (
  <Layout>
    <Header />
    <About />
  </Layout>
);

export default IndexPage
