import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class SiteTop extends React.Component {
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
      ],
    }
  }

  listGen() {
    return this.state.navItems.map(item => {
      return (
        <li key={item.id}>
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

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <span>Created by creator</span> |
        <span>Copyright 2018</span>
      </footer>
    )
  }
}

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1 rem` }}>
    <SiteTop label="Fuck you!" />
    <header style={{ marginBottom: `1.5em` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>MySweetSite</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </header>
    {children}
    <Footer/>
  </div>
)
