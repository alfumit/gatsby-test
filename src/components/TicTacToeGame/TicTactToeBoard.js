import React from 'react'
import { css } from 'react-emotion'
import { connect } from 'react-redux'
import { rhythm } from '../../utils/typography'

import TicTacToeTile from './TicTacToeTile';

const boardGen = (boardSize = 3) => {
  let res = [];
  for(let i = 0; i < boardSize; i++) {
    for(let j = 0; j < boardSize; j++) {
      res.push({tileX: j, tileY: i, value: ''})
    }
  }
  return res;
}

class TicTactToeBoard extends React.Component {
  
  state = {
    board: boardGen(this.props.boardSize)
  }
  
  componentWillMount() {
    this.props.generateBoard(this.state.board);
  }
  
  render() {
    return (
      <div className={css`
        margin-top: ${rhythm(2)};
      `}>
        <ul className={css`
        list-style-type: none;
        display: table;
        margin: ${rhythm(1)} auto;
        `}>
          {this.state.board.map((item) => (
            <TicTacToeTile
              key={`${item.tileX} ${item.tileY}`}
              tileX={item.tileX}
              tileY={item.tileY}
              updateField = {this.props.updateField.bind(this)}
            />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    boardSize: state.TicTacToeReducer.boardSize
  }
}

const mapDispatchToProps = dispatch => {
  return {
    generateBoard: (board) => {
      dispatch({
        type: 'GENERATE_BOARD',
        payload: board
      })
    },
    updateField: (fieldRecord) => {
      dispatch({
        type: 'UPDATE_FIELD',
        payload: fieldRecord
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TicTactToeBoard)
