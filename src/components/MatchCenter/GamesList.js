import React from 'react'
import { css } from 'react-emotion'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

import { connect } from 'react-redux'

import apiToken from './footbalApiToken'

class GamesList extends React.PureComponent {
  
  componentWillMount() {
    //TODO: move out of component to reducer
    const myHeaders = new Headers();
    myHeaders.append('X-Auth-Token', apiToken)
    fetch('https://api.football-data.org/v2/matches', {
      headers: myHeaders
    }).then((res) => {
      console.log(res);
    })
  }
  render() {
    return (
      <div>
        Games List {apiToken}
        <Grid container spacing={24}>
          {this.props.gamesList.map((item) =>
            (<Grid item xs={8} key={item.id}>
              <Card>
                <CardContent>
                  <div>Game {item.host} : {item.guest}</div>
                  <div>Score {item.score}</div>
                </CardContent>
                <CardActions>
                  <Button
                    variant={'contained'}
                    color={'primary'}
                    onClick={() => this.props.pickGame(item.id)}>
                    View Game
                  </Button>
                </CardActions>
              </Card>

            </Grid>)
          )}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gamesList: state.MatchCenter.gamesList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    pickGame: (game) => {
      dispatch({
        type: 'PICK_GAME',
        payload: game.id
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesList)
