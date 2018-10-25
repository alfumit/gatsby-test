import React from 'react'

const MatchInfo = props => {
  const { host, guest, score } = props
  return (
    <div>
      <h2>
        {host} : {guest}
      </h2>
      <h4>{score}</h4>
    </div>
  )
}

export default MatchInfo
