import apiToken from '../footbalApiToken'

const initialState = {
  gamesOverview: true,
  gamePicked: false,
  gamePickedId: 0,
  gamesList: [{
    id: 1,
    guest: 'Manchester United',
    host: 'Manchester City',
    score: '2 : 1',
    city: 'Manchester',
    date: new Date()
  },
    {
      id: 2,
      guest: 'Spartak Moscow',
      host: 'Zenit Saint-Petersburg',
      score: '2 : 1',
      city: 'Manchester',
      date: new Date()
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PICK_GAME':
      state = {
        ...state,
        gamePicked: true,
        gamePickedId: action.payload
      }
      break
    case 'TO_OVERVIEW':
      state = {
        ...state,
        gamePicked: false
      }
      break
    case 'FETCH_PL_DATA_FULFILLED':
      //TODO: return the list of gmaes
      // const myHeaders = new Headers();
      // myHeaders.append('X-Auth-Token', apiToken)
      // fetch('https://api.football-data.org/v2/matches', {
      //   headers: myHeaders
      // }).then((res) => {
      //   console.log(res);
      // }
      break
  }
  return state
}

export default reducer;
