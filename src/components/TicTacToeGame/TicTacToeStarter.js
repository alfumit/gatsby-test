import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { css } from 'react-emotion'
import { connect } from 'react-redux'
import { rhythm } from '../../utils/typography'

const rnd = Math.floor(Math.random()*7);
class Starter extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
      query {
        allPixabayPhoto(limit:7) {
          edges {
            node {
              largeImageURL
            }
          }
        }
      }
    `}
        render={data => {
          const welcomeImage = data.allPixabayPhoto.edges[rnd].node.largeImageURL
          return (
            <div
            className={css`
          width: 100%;
          height: 300px;
          background-color: rgba(200, 200, 200, 0.5);
          background-image: url(${welcomeImage});
          background-size: cover;
          color: white;
          text-align: center;
          padding-top: ${rhythm(1)}
        `}
          >
            <h1>Welcome to the Game</h1>
            {this.props.gameOn}
              <input type="number" placeholder='Choose board size' value={this.props.boardSize} onChange={(e) => this.props.chooseBoardSize(e)}/>
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
        }}
          />
    )
  }
}

const mapStateToProps = state => {
  return {
    gameOn: state.TicTacToeReducer.gameOn,
    boardSize: state.TicTacToeReducer.boardSize
  }
}
const mapDispatchToProps = dispatch => {
  return {
    startGame: () => {
      dispatch({
        type: 'START_GAME',
      })
    },
    chooseBoardSize: (event) => {
      const value = parseInt(event.target.value);
      if(value < 2 || value > 10) return;
      dispatch({
        type: 'SET_BOARD_SIZE',
        payload: value
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Starter)
