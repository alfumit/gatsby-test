import React from 'react'
import { css } from 'emotion'

const markTile = (tileX, tileY, value, player, updateField) => {
  if (value) {
    console.log('Tile taken')
    return
  }
  updateField({ tileX: tileX, tileY: tileY, value: player })
}

const TicTacToeTile = props => {
  const { tileX, tileY, value, player, updateField } = props
  return (
    <li
      onClick={() => markTile(tileX, tileY, value, player, updateField)}
      className={css`
        float: left;
        clear: ${tileX === 0 ? 'both' : 'none'};
        width: 50px;
        height: 50px;
        border: 1px solid black;
        text-align: center;
        vertical-align: middle;
        margin: 0;
      `}
    >
      <span
        className={css`
          display: block;
          margin-top: 10px;
        `}
      >
        {value}
      </span>
    </li>
  )
}
export default TicTacToeTile;
