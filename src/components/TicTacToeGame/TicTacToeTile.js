import React from 'react'
import { css } from 'emotion'

import { connect } from 'react-redux'

class TicTacToeTile extends React.Component {
  state = {
    value: ''
  }
  
  markTile() {
    if(this.props.currentPlayer) {
      this.setState({value: this.props.currentPlayer})
    }
  
    this.props.updateField({tileX: this.props.tileX, tileY: this.props.tileY, value: this.props.currentPlayer})
  }
  
  render() {
    const tileX = this.props.tileX;
    const tileY = this.props.tileY;
    const fieldSize = this.props.fieldSize;
    return (
      <li onClick={() => this.markTile()} className={css`
      float: left;
      clear: ${(tileX === 0) ? 'both' : 'none'};
      width: 50px;
      height: 50px;
      border: 1px solid black;
      text-align: center;
      vertical-align: middle;
      margin: 0;
      `}>
        <span className={css`
        display: block;
        margin-top: 10px`}>{this.state.value}</span>
      </li>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentPlayer: state.TicTacToeReducer.currentPlayer
  }
}

export default connect(mapStateToProps)(TicTacToeTile)
