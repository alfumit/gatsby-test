import React from 'react'
import { Link } from 'gatsby'
import HeaderCustom from '../components/header-custom'
import Layout from '../components/layout-custom'

export default () => (
  <Layout>
    <div style={{ color: 'teal' }}>
      <Link to="/">Home</Link>
      <HeaderCustom headerText="Contact" />
      <p>Send us a message!</p>
      <h1>I'd love to talk! Email me at the address below</h1>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </div>
  </Layout>
)
