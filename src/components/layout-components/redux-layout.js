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
  gameOver: undefined,
  sitelet: 'redux-works',
  num: 0,
  itemList: [],
  generalData: [],
  crissCrossField: []
}

const winAnalyzer = (board) => {
  let res = {status: 'continue', winner: undefined};
  const boardSize = board[0].fieldSize;
  const middle = Math.floor( boardSize / 2);
  
  let horizontalLine = '', verticalLine = '', mainDiagonal = '', secondaryDiagonal = '';
  board.forEach((item) => {
    if(item.tileY === middle) {
      horizontalLine += item.value;
    }
    if(item.tileX === middle) {
      verticalLine += item.value;
    }
    if(item.tileX === item.tileY) {
      mainDiagonal += item.value;
    }
    if(boardSize - 1 - item.tileX ===  item.tileY) {
      secondaryDiagonal += item.value
    }
    
  })
  
  if(horizontalLine.length === 3) res = {status: 'win', winner: 'O'}
  if(verticalLine.length === 3) res = {status: 'win', winner: 'O'}
  if(mainDiagonal.length === 3) res = {status: 'win', winner: 'O'}
  if(secondaryDiagonal.length === 3) res = {status: 'win', winner: 'O'}
  
  return res;
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
    case 'END_GAME':
      state = {
        ...state,
        gameOver: {
          winner: 'O'
        }
      }
      break
    case 'GENERATE_BOARD':
      state = {
        ...state,
        crissCrossField: action.payload
      }
      break
    case 'UPDATE_FIELD':
      const tileX = action.payload.tileX;
      const tileY = action.payload.tileY;
      const value = action.payload.value;
      const newBoard = state.crissCrossField.slice();
      
      const field = newBoard.find((item)=> item.tileX === tileX && item.tileY === tileY);
      field.value = value;

      console.log(state.crissCrossField);
      const analysis = winAnalyzer(newBoard);
      if(analysis.status === 'win') {
        state.gameOver = true;
        state.winner = analysis.winner
        alert(`Player ${state.winner} ${analysis.status}s`)
      }
      
      state = {
        ...state,
        crissCrossField: newBoard
      }
      
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
