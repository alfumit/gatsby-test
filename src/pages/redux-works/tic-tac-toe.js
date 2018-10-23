import React from 'react'

import Layout from '../../components/layout-components/redux-layout'
import TicTacToeContainer from '../../components/TicTacToeGame/TicTacToeContainer'

export default class TicTacToe extends React.PureComponent {
  render() {
    return (
      <Layout>
        <h1>The Game of Tic-Tac-Toe</h1>
        <TicTacToeContainer />
      </Layout>
    )
  }
}
