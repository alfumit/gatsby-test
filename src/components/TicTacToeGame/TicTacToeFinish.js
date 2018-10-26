import React from 'react'
import { css } from 'react-emotion'
import { connect } from 'react-redux'
import { graphql, StaticQuery } from 'gatsby'
import { rhythm } from '../../utils/typography'

import { startOver } from './actions/TicTacToeActions'

class TicTacToeFinish extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
      query {
        allPixabayPhoto(limit:5) {
          edges {
            node {
              largeImageURL
            }
          }
        }
      }
    `}
        render={data => {
          const finalImage = data.allPixabayPhoto.edges[1].node.largeImageURL;
          return (
            <div className={css`
              width: 100%;
              height: 300px;
              margin: ${rhythm(1)} auto;
              background-color: black;
              background-image: url(${finalImage});
              background-size: cover;
              color: white;
              text-align: center;
            `}>
              <h1>Game Over</h1>
              {this.props.status === 'win' && (
                <h2>Player {this.props.winner} wins!</h2>
              )}
              {this.props.status === 'tie' && <h2>A shoot! It's a tie!</h2>}
              <button onClick={() => this.props.startOver()}>
                Start new game
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
    winner: state.TicTacToeReducer.winner,
    status: state.TicTacToeReducer.status,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startOver: () => {
      dispatch(startOver())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicTacToeFinish)
