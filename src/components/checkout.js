import React from 'react'

const amount = 2500
const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  padding: '3rem',
  boxShadow: '5px 5px 25px 0 rgba(46,61,73,.2)',
  backgroundColor: '#fff',
  borderRadius: '6px',
  maxWidth: '400px',
}
const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '12px 60px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'rgb(255, 178, 56)',
  borderRadius: '6px',
  letterSpacing: '1.5px',
}

const Checkout = class extends React.Component {
  state = {
    disabled: false,
    buttonText: 'KOP NO',
    paymentMessage: 'Pay now or suffer the consequences',
  }

  resetButton() {
    this.setState({ disbled: false, buttonText: 'KOP NO' })
  }

  componentDidMount() {
    this.stripeHandler = window.StripeCheckout.configure({
      key: 'pk_test_0cue1mR6ZBt3uPajyTB8bLsL',
      closed: () => {
        this.resetButton()
      },
    })
  }

  openStripeCheckout(event) {
    event.preventDefault()
    this.setState({ disabled: true, buttonText: 'Loading....' })
    this.stripeHandler.open({
      name: 'Demo Product',
      amount: amount,
      description: 'Super product',
      token: token => {
        fetch('AWS_LAMBDA_URL', {
          method: 'POST',
          body: JSON.stringify({
            token,
            amount,
          }),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        })
        .then(res => {
          console.log('Money gone')
          this.resetButton()
          this.setState({ payMentMessage: 'Payment successful'})
          return res.json()
        })
        .catch(error => {
          console.error("Error:", error)
          this.setState({ paymentMessage: "Payment Failed" })
        })
      },
    })
    return false
  }

  render() {
    return (
      <div style={cardStyles}>
        <h4>Spend Your Money!</h4>
        <p>
          Use any email, 4242 4242 4242 4242 as the credit card number, any 3
          digit number, and any future date of expiration.
        </p>
        <button
          style={buttonStyles}
          onClick={event => this.openStripeCheckout(event)}
          disabled={this.state.disabled}
        >
          {this.state.buttonText}
        </button>
        {this.state.paymentMessage}
      </div>
    )
  }
}

export default Checkout
