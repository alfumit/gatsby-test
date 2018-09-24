import React from 'react'
import Layout from '../components/layout-custom'
import Checkout from '../components/checkout'
import { graphql } from 'gatsby'

export default () => {
  return (
    <Layout>
      <h1>A cart checkout page</h1>
      <Checkout />
    </Layout>
  )
}
