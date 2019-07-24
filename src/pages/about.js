import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        Bhekani is a Software Developer with a background as a Civil Engineer
        and GIS specialist. He has worked on all aspects of engineering design,
        development and project management within the municipal engineering and
        consulting environments. Bhekani has demonstrated in-depth knowledge of
        data collection, analysis, management and publishing. He specifically
        excels at developing business solutions through effective analysis of
        existing processes, outlining problem areas and recommending process
        improvements to increase efficiency and productivity. He is also
        interested in community development, art and music.
      </p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
