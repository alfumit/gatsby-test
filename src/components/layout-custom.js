import React from 'react'
import { css } from 'react-emotion'
import { Helmet } from 'react-helmet'
import { StaticQuery, Link, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'

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

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <span>Created by creator</span> |<span>Copyright 2018</span>
      </footer>
    )
  }
}

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        className={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <meta description="A test site about Pandas"/>
          <title>data.site.siteMetadata.title</title>
          <link rel="canonical" href="/" />
        </Helmet>
        <SiteTop label="Welcome!" />
        <Link to={'/'}>
          <h3
            className={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={`/about`}
          className={css`
            float: right;
          `}
        >
          About
        </Link>
        {children}
        <Footer />
      <script src="https://checkout.stripe.com/checkout.js" />
      </div>
    )}
  />
)
