import React from 'react'
import ReduxContainer from '../../components/ReduxContainer'
import Layout from '../../components/layout-components/redux-layout'

export default class ReduxPage extends React.PureComponent {
  state = {
    test: 'Redux test',
  }

  render() {
    return (
      <Layout>
        <h1>{this.state.test}</h1>
        <ReduxContainer />
      </Layout>
    )
  }
}
