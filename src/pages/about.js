import React from  'react';
import { graphql } from 'gatsby';

import HeaderCustom from '../components/header-custom';
import Layout from '../components/layout-custom';

export default ({ data }) => (
  <Layout>
    <div>
      <HeaderCustom headerText={data.site.siteMetadata.title} />
      <h1>About Pandas Eating Lots</h1>
      <p>
        We're the only site running on your computer dedicated to showing the best
        photos and videos of pandas eating lots of food.
      </p>
    </div>
  </Layout>
)

export const query = graphql`
         query {
           site {
             siteMetadata {
               title
             }
           }
         }
       `
