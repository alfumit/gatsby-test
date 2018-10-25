import React from 'react'
import { connect } from 'react-redux'
import { css } from 'react-emotion'
import Button from '@material-ui/core/Button'

import CityInfo from './CityInfo'
import WeatherCard from './WeatherCard'
import MatchInfo from './MatchInfo'

class GameCard extends React.PureComponent {
  render() {
    return (
      <div className={css`
        background-color: yellow;
      `}>
        <div className={css`
          float: left;
        `}>
          <CityInfo city={this.props.gamesList[0].city}/>
        </div>
        <div className={css``}>
          <MatchInfo matchData={this.props.gamesList[0].city} />
        </div>
        <div className={css`
          float: right;
        `}>
          <WeatherCard />
        </div>
        <div className={css`
        clear: both`}> </div>
        <Button variant={'contained'} color={'default'} size={'medium'} onClick={() => this.props.returnToOverview()}>
          Back To Match Center Overview
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gamePickedId: state.MatchCenter.gamePicked,
    gamesList: state.MatchCenter.gamesList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    returnToOverview: () => {
      dispatch({
        type: 'TO_OVERVIEW'
      })
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(GameCard)
