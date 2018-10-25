import React from 'react'
import Card from '@material-ui/core/Card'

class CityInfo extends React.PureComponent {
  render() {
    return (
      <Card>
        {this.props.city}
      </Card>
    )
  }
}
export default CityInfo
