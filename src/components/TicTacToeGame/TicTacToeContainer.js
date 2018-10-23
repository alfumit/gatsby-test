import React from 'react'
import { connect } from 'react-redux'

import TicTacToeStarter from './TicTacToeStarter'
import TicTactToeBoard from './TicTactToeBoard'
import TicTacToeFinish from './TicTacToeFinish'

class TicTacToeContainer extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        {!this.props.gameOn && <TicTacToeStarter />}
        {this.props.gameOn && !this.props.gameOver && <TicTactToeBoard />}
        {this.props.gameOver && <TicTacToeFinish />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    gameOn: state.TicTacToeReducer.gameOn,
    gameOver: state.TicTacToeReducer.gameOver,
  }
}

export default connect(mapStateToProps)(TicTacToeContainer)
