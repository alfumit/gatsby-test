import React from 'react'
import { css } from 'react-emotion'
import { Helmet } from 'react-helmet'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StaticQuery, Link, graphql } from 'gatsby'

import { SiteTop } from './layout-components/SiteTop/SiteTop'
import { Footer } from './layout-components/Footer/Footer'
import Container from './container/container'

import { rhythm } from '../utils/typography'

const initialState = {
  num: 0,
  itemList: [],
}
const mathReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        num: state.num + action.payload,
      }
      break
    case 'SUB':
      state = {
        ...state,
        num: state.num - action.payload,
      }
      break
  }
  console.log('REDUCER WORKED', state)
  return state
}
const globalStore = createStore(mathReducer)

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

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
        <Provider store={globalStore}>
          <React.Fragment>
            <Helmet>
              <meta charSet="utf-8" />
              <meta description="A test site about Pandas" />
              <title>{data.site.siteMetadata.title}</title>
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
            {children}
            <Footer />
            <Container />
            <script src="https://checkout.stripe.com/checkout.js" />
          </React.Fragment>
        </Provider>
      </div>
    )}
  />
)
