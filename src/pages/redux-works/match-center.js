import React from 'react';
import { css } from 'react-emotion';
import { rhythm } from '../../utils/typography'

import Layout from '../../components/layout-components/redux-layout'
import MatchCenterContainer from '../../components/MatchCenter/MatchCenterContainer'

class MatchCenter extends React.PureComponent {
  
  render() {
    return (
      <Layout>
        <div className={css`
        margin: ${rhythm(1)} auto;
        `}>
          <h1>Match Center</h1>
          <MatchCenterContainer />
        </div>
      </Layout>
    )
  }
}

export default MatchCenter
