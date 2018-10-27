import React from 'react'
import { css } from 'react-emotion'
import { connect } from 'react-redux'
import { rhythm } from '../../utils/typography'

import { generateBoard, updateField } from './actions/TicTacToeActions'

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
  
  componentWillMount() {
    this.props.generateBoard(boardGen(this.props.boardSize));
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
          {this.props.board.map((item) => (
            <TicTacToeTile
              key={`${item.tileX} ${item.tileY}`}
              tileX={item.tileX}
              tileY={item.tileY}
              value={item.value}
              player={this.props.currentPlayer}
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
    boardSize: state.TicTacToeReducer.boardSize,
    board: state.TicTacToeReducer.crissCrossField,
    currentPlayer: state.TicTacToeReducer.currentPlayer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    generateBoard: (board) => {
      dispatch(generateBoard(board))
    },
    updateField: (fieldRecord) => {
      dispatch(updateField(fieldRecord))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TicTactToeBoard)
