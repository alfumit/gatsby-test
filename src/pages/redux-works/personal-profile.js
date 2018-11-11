import React from 'react'
import Layout from '../../components/layout-components/redux-layout'
import { css } from 'emotion'
import { rhythm } from '../../utils/typography'

const PersonalProfile = () => (
  <Layout>
    <div className={css`
        margin: ${rhythm(1)} auto;
        `}>
      <h1>Personal Profile</h1>
    </div>
  </Layout>
)

export default PersonalProfile;
