import React from 'react'
import { connect } from 'react-redux'
import { css } from 'react-emotion'
import { rhythm } from '../../utils/typography'

import TicTacToeStarter from './TicTacToeStarter'
import TicTactToeBoard from './TicTactToeBoard'
import TicTacToeFinish from './TicTacToeFinish'

class TicTacToeContainer extends React.PureComponent {
  render() {
    return (
      <div className={css`
          width: 500px;
          margin: ${rhythm(1)} auto;
      `}>
        {!this.props.gameOn && <TicTacToeStarter />}
        {this.props.gameOn && !this.props.gameOver && <TicTactToeBoard />}
        {this.props.gameOver && <TicTacToeFinish />}
      </div>
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
