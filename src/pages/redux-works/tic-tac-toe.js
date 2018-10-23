import React from 'react'

import Layout from '../../components/layout-components/redux-layout'
import TicTacToeContainer from '../../components/CrissCrossGame/TicTacToeContainer'

class TicTacToe extends React.PureComponent {
  render() {
    return (
      <Layout>
        <h1>The Game of Tic-Tac-Toe</h1>
        <TicTacToeContainer />
      </Layout>
    )
  }
}

export default TicTacToe;
