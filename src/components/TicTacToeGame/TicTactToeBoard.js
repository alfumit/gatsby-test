import React from 'react'
import { css } from 'react-emotion'
import { connect } from 'react-redux'

import TicTacToeTile from './TicTacToeTile';

const fieldGen = (fieldSize = 3) => {
  let res = [];
  for(let i = 0; i < fieldSize; i++) {
    for(let j = 0; j < fieldSize; j++) {
      res.push({tileX: j, tileY: i, value: '', fieldSize})
    }
  }
  return res;
}

class TicTactToeBoard extends React.Component {
  
  state = {
    field: []
  }
  
  componentWillMount() {
    this.state.field = fieldGen();
    this.props.generateBoard(this.state.field);
  }
  
  render() {
    return (
      <div>
        <ul className={css`
        list-style-type: none
        `}>
          {this.state.field.map((item) => (
            <TicTacToeTile
              key={`${item.tileX} ${item.tileY}`}
              tileX={item.tileX}
              tileY={item.tileY}
              fieldSize={item.fieldSize}
              updateField = {this.props.updateField.bind(this)}
            />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
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
