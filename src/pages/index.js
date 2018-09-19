import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../../gatsby-test/src/components/layout'

const IndexPage = () => (
  <Layout>
    <h1 style={{ color: 'red', fontSize: '72px' }}>Hi people. Thank you!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/contact/">Contact</Link>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Link to="/page-2/">Go to page 2</Link> |
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
