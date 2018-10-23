import React from 'react'
import { css } from 'react-emotion'
import { connect } from 'react-redux'
import { rhythm } from '../../utils/typography'


class Starter extends React.Component {
  render() {
    return (
      <div
        className={css`
          width: 500px;
          height: 200px;
          background-color: rgba(200, 200, 200, 0.5);
          text-align: center;
          padding-top: ${rhythm(1)}
        `}
      >
        <h1>Welcome to the Game</h1>
        {this.props.gameOn}
        <button
          className={css`
            margin-top: 20px;
          `}
          onClick={() => this.props.startGame()}
        >
          I want to start!
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gameOn: state.TicTacToeReducer.gameOn,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    startGame: () => {
      dispatch({
        type: 'START_GAME',
      })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Starter)
