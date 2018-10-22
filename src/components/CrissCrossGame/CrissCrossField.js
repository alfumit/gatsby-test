import React from 'react'
import { css } from 'react-emotion'
import { connect } from 'react-redux'

import CrissCrossTile from './CrissCrossTile';

const fieldGen = (fieldSize = 3) => {
  let res = [];
  for(let i = 0; i < fieldSize; i++) {
    for(let j = 0; j < fieldSize; j++) {
      res.push({tileX: j, tileY: i, value: '', fieldSize})
      // res.push(<CrissCrossTile key={`${i} ${j}`} tileX={i} tileY={j} fieldSize={fieldSize}/>)
    }
  }
  return res;
}

class CrissCrossField extends React.Component {
  
  state = {
    field: []
  }
  
  componentWillMount() {
    this.state.field = fieldGen();
  }
  
  render() {
    return (
      <div>
        <ul className={css`
        list-style-type: none
        `}>
          {this.state.field.map((item) => (
            <CrissCrossTile key={`${item.tileX} ${item.tileY}`} tileX={item.tileX} tileY={item.tileY} fieldSize={item.fieldSize}/>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    field: state.crissCrossField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    generateField: () => {
      dispatch({
        type: 'GENERATE_FIELD',
        payload: this.state.field
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CrissCrossField)
