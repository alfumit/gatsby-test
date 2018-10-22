import React from 'react'

import Layout from '../../components/layout-components/redux-layout'
import CrissCrossContainer from '../../components/CrissCrossGame/CrissCrossContatiner'

class CrissCross extends React.PureComponent {
  render() {
    return (
      <Layout>
        <h1>The Game of CrissCross</h1>
        <CrissCrossContainer />
      </Layout>
    )
  }
}

export  default CrissCross;
