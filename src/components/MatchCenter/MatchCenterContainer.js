import React from 'react'
import { css } from 'react-emotion';
import { connect } from 'react-redux'

import GamesList from './GamesList'
import GameCard from './GameCard/GameCard'

class MatchCenterContainer extends React.PureComponent {
  render() {
    return (
      <div className={css`
        background-color: red;
      `}>
        {!this.props.gamePicked && <GamesList />}
        {this.props.gamePicked && <GameCard/>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gamePicked: state.MatchCenter.gamePicked,
    gamePickedId: state.MatchCenter.gamePickedId
  }
}
export default connect(mapStateToProps)(MatchCenterContainer)
