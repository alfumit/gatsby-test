export function startGame() {
  return {
    type: 'START_GAME'
  }
}

export function startOver() {
  return {
    type: 'START_OVER'
  }
}

export function setBoardSize(value) {
  return {
    type: 'SET_BOARD_SIZE',
      payload: value
  }
}

export function generateBoard(board) {
  return {
    type: 'GENERATE_BOARD',
    payload: board
  }
}

export function updateField(fieldRecord) {
  return {
    type: 'UPDATE_FIELD',
    payload: fieldRecord
  }
}
