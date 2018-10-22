import React from 'react'
import { css } from 'react-emotion'
import { Helmet } from 'react-helmet'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StaticQuery, Link, graphql } from 'gatsby'

import SiteTop from './SiteTop/SiteTop'
import { Footer } from './Footer/Footer'

import { rhythm } from '../../utils/typography'

const initialState = {
  gameOn: false,
  sitelet: 'redux-works',
  num: 0,
  itemList: [],
  generalData: [],
  crissCrossField: []
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
    case 'ADD_TO_GEN_DATA':
      const gData = state.generalData.slice();
      state = {
        ...state,
        generalData: gData.push(action.payload)
      }
      break
    case 'START_GAME':
      state = {
        ...state,
        gameOn: true
      }
      break
  }
  return state
}
const globalStore = createStore(mathReducer)


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
    render={data => {
      return (
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
            {/*<SiteTop label={`Welcome to `}/>*/}
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
            <hr/>
            <ul>
              <li>
                <Link to={'/redux-works/redux-page'} >
                  General Redux Page
                </Link>
              </li>
              
              <li>
                <Link to={'/redux-works/criss-cross-page'}>
                  CrissCross
                </Link>
              </li>
            </ul>
            
            {children}
            <Footer />
            <script src="https://checkout.stripe.com/checkout.js" />
          </React.Fragment>
        </Provider>
      </div>
    )}}
  />
)
