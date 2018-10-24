import React from 'react'
import { css } from 'react-emotion'
import { connect } from 'react-redux'

class GamesList extends React.PureComponent {
  
  render() {
    return (
      <div>
        Games List
        <ul>
          {this.props.gamesList.map((item) =>
            (<li key={item.id}>
              <div>Game {item.host} : {item.guest}</div>
              <div>Score {item.score}</div>
            </li>)
          )}
          
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gamesList: state.MatchCenter.gamesList
  }
}

export default connect(mapStateToProps)(GamesList)
