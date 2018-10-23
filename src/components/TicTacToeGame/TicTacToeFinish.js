import React from 'react'
import { css } from 'react-emotion'
import { connect } from 'react-redux'

class TicTacToeFinish extends React.Component {
  render() {
    return (
      <div>
        <h1>Game Over</h1>
        {this.props.status === 'win' && <h2>Player {this.props.winner} wins!</h2>}
        {this.props.status === 'tie' && <h2>A shoot! It's a tie!</h2>}
        <button onClick={() => this.props.startOver()}>Start new game</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    winner: state.TicTacToeReducer.winner,
    status: state.TicTacToeReducer.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startOver: () => {
      dispatch({
        type: 'START_OVER'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeFinish)
