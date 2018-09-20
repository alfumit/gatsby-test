import React from 'react'
import { Link } from 'gatsby'

// import Layout from '../../../gatsby-test/src/components/layout'
import Layout from '../components/layout-custom';

const IndexPage = () => (
  <Layout>
    <h1 style={{ color: 'red', fontSize: '72px' }}>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)

export default IndexPage
