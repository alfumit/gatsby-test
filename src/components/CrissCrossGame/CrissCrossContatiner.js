import React from 'react'
import { connect } from 'react-redux'

import CrissCrossStarter from '../../components/CrissCrossGame/CrissCrossStarter'
import CrissCrossField from '../../components/CrissCrossGame/CrissCrossField'

class CrissCrossContainer extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        {!this.props.gameOn && <CrissCrossStarter />}
        {this.props.gameOn && <CrissCrossField />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameOn: state.gameOn
  }
}

export default connect(mapStateToProps)(CrissCrossContainer)
