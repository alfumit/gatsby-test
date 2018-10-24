const initialState = {
  gamesOverview: true,
  gamePicked: false,
  gamesList: [{
    id: 1,
    guest: 'Manchester United',
    host: 'Manchester City',
    score: '2 : 1',
    city: 'Manchester',
    date: new Date()
  }]
}

const reducer = (state = initialState, action) => {
  switch (action) {
    case 'PICK_GAME':
      state = {
        ...state,
        gamePicked: true
      }
      break
  }
  return state
}

export default reducer;
