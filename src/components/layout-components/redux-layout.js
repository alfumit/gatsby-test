import React from 'react'
import { css } from 'react-emotion'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { StaticQuery, Link, graphql } from 'gatsby'

import globalStore from './redux-store';

import { Footer } from './Footer/Footer'
import { rhythm } from '../../utils/typography'

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
              <hr />
              <ul>
                <li>
                  <Link to={'/redux-works/redux-page'}>General Redux Page</Link>
                </li>

                <li>
                  <Link to={'/redux-works/tic-tac-toe'}>Tic-Tac-Toe</Link>
                </li>
              </ul>
              <div className={css`
                width: 80%;
                margin: 0 auto;
                box-sizing: border-box;
              `}>
                {children}
              </div>
              <hr />
              <Footer />
              <script src="https://checkout.stripe.com/checkout.js" />
            </React.Fragment>
          </Provider>
        </div>
      )
    }}
  />
)

