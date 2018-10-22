import React from 'react'
import { css } from 'emotion'

export default class CrissCrossTile extends React.Component {
  state = {
    value: '',
    clicker: undefined
  }
  
  markTile() {
    this.setState({value: 'O'})
    
    if(this.props.clicker) {
      this.setState({value: this.porops.clicker})
    }
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
