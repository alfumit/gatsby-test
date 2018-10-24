import React from 'react'
import { connect } from 'react-redux'

class ReduxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eeee: 'ooooo',
    };
  }


  render() {
    return (
      <React.Fragment>
        <div>I'm am number {this.props.num}</div>
        <button onClick={() => this.props.addToNum()}>Add</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    num: state.TestReducer.num
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addToNum: () => {
      dispatch({
        type: 'ADD',
        payload: 10,
      })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxContainer)
