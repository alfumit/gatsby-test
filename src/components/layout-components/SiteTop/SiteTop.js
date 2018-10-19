import React from 'react'
import { Link } from 'gatsby'

export class SiteTop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: 'Solutions For:',
      navItems: [
        {
          title: 'About',
          link: '/about',
        },
        {
          title: 'Contact',
          link: '/contact',
        },
        {
          title: 'Home',
          link: '/',
        },
        {
          title: "Don't let 'em die",
          link: '/cart-checkout',
        },
      ],
    }
  }
  
  listGen() {
    return this.state.navItems.map((item, index) => {
      return (
        <li key={index}>
          <Link to={item.link}> {item.title}</Link>
        </li>
      )
    })
  }
  
  render() {
    return (
      <div id="site-top" className="site-top">
        <div className="container">
          <nav className="site-nav">
            <div className="label">
              <p>{this.props.label}</p>
            </div>
            <ul className="site-selector">{this.listGen()}</ul>
          </nav>
        </div>
      </div>
    )
  }
}
