const initialState = {
  gameOn: false,
  gameOver: undefined,
  playersList: ['X', 'O'],
  winner: undefined,
  status: 'continue',
  currentPlayer: 'X',
  crissCrossField: [],
}

const getWinningLines = board => {
  /*Collecting each line and diagonal*/
  let mainDiagonal = '',
    secondaryDiagonal = '',
    horizontalLines = [],
    verticalLines = []
  const boardSize = board[0].fieldSize
  board.forEach(item => {
    for (let i = 0; i < boardSize; i++) {
      if (!horizontalLines[i]) horizontalLines[i] = ''
      if (!verticalLines[i]) verticalLines[i] = ''
      if (item.tileY === i) {
        horizontalLines[i] += item.value
      }
      if (item.tileX === i) {
        verticalLines[i] += item.value
      }
    }
    if (item.tileX === item.tileY) {
      mainDiagonal += item.value
    }
    if (boardSize - 1 - item.tileX === item.tileY) {
      secondaryDiagonal += item.value
    }
  })
  return { horizontalLines, verticalLines, mainDiagonal, secondaryDiagonal }
}

const winAnalyzer = (board, currentPlayer) => {
  let res = { status: 'continue', winner: undefined }
  const boardSize = board[0].fieldSize
  const {
    horizontalLines,
    verticalLines,
    secondaryDiagonal,
    mainDiagonal,
  } = getWinningLines(board)

  /*Checking each line and diagonal for a winner */
  const testRegex = new RegExp(`\[^${currentPlayer}\]`)
  for (let i = 0; i < boardSize; i++) {
    const horizontalLine = horizontalLines[i]
    const verticalLine = verticalLines[i]
    if (!horizontalLine.match(testRegex) && horizontalLine.length === boardSize)
      res = { status: 'win', winner: currentPlayer }
    if (!verticalLine.match(testRegex) && verticalLine.length === boardSize)
      res = { status: 'win', winner: currentPlayer }
  }

  if (!mainDiagonal.match(testRegex) && mainDiagonal.length === boardSize)
    res = { status: 'win', winner: currentPlayer }
  if (
    !secondaryDiagonal.match(testRegex) &&
    secondaryDiagonal.length === boardSize
  )
    res = { status: 'win', winner: currentPlayer }

  /* Checking for Tie */
  if (board.every(item => item.value)) {
    res = { status: 'tie', winner: undefined }
  }

  return res
}

const TicTacToeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      state = {
        ...state,
        gameOn: true,
      }
      break
    case 'GENERATE_BOARD':
      state = {
        ...state,
        crissCrossField: action.payload,
      }
      break
    case 'UPDATE_FIELD':
      const { tileX, tileY, value } = action.payload
      const newBoard = state.crissCrossField.slice()

      const field = newBoard.find(
        item => item.tileX === tileX && item.tileY === tileY
      )
      field.value = value

      const analysis = winAnalyzer(newBoard, state.currentPlayer)
      if (analysis.status !== 'continue') {
        state.gameOver = true
        state.winner = analysis.winner
        state.status = analysis.status
      }

      state = {
        ...state,
        currentPlayer: state.playersList.find(
          item => item !== state.currentPlayer
        ),
        crissCrossField: newBoard,
      }
      break
    case 'START_OVER':
      state = initialState
      break
  }
  return state
}

export default TicTacToeReducer
