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
  playersList: ['X', 'O'],
  winner: undefined,
  status: 'continue',
  sitelet: 'redux-works',
  currentPlayer: 'X',
  num: 0,
  itemList: [],
  generalData: [],
  crissCrossField: [],
}

const getWinningLines = board => {
  /*Collecting each line and diagonal*/
  let mainDiagonal = '',
    secondaryDiagonal = '',
    horizontalLines = [],
    verticalLines = []
  const boardSize = board[0].fieldSize
  board.forEach(item => {
    for (let i = 0; i < boardSize; i++) {
      if (!horizontalLines[i]) horizontalLines[i] = ''
      if (!verticalLines[i]) verticalLines[i] = ''
      if (item.tileY === i) {
        horizontalLines[i] += item.value
      }
      if (item.tileX === i) {
        verticalLines[i] += item.value
      }
    }
    if (item.tileX === item.tileY) {
      mainDiagonal += item.value
    }
    if (boardSize - 1 - item.tileX === item.tileY) {
      secondaryDiagonal += item.value
    }
  })
  return { horizontalLines, verticalLines, mainDiagonal, secondaryDiagonal }
}

const winAnalyzer = (board, currentPlayer) => {
  let res = { status: 'continue', winner: undefined }
  const boardSize = board[0].fieldSize
  const {
    horizontalLines,
    verticalLines,
    secondaryDiagonal,
    mainDiagonal,
  } = getWinningLines(board)

  /*Checking each line and diagonal for a winner */
  const testRegex = new RegExp(`\[^${currentPlayer}\]`)
  for (let i = 0; i < boardSize; i++) {
    const horizontalLine = horizontalLines[i]
    const verticalLine = verticalLines[i]
    if (!horizontalLine.match(testRegex) && horizontalLine.length === boardSize)
      res = { status: 'win', winner: currentPlayer }
    if (!verticalLine.match(testRegex) && verticalLine.length === boardSize)
      res = { status: 'win', winner: currentPlayer }
  }

  if (!mainDiagonal.match(testRegex) && mainDiagonal.length === boardSize)
    res = { status: 'win', winner: currentPlayer }
  if (
    !secondaryDiagonal.match(testRegex) &&
    secondaryDiagonal.length === boardSize
  )
    res = { status: 'win', winner: currentPlayer }

  /* Checking for Tie */
  if (board.every(item => item.value)) {
    res = { status: 'tie', winner: undefined }
  }

  return res
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
      const gData = state.generalData.slice()
      state = {
        ...state,
        generalData: gData.push(action.payload),
      }
      break
    case 'START_GAME':
      state = {
        
        ...state,
        gameOn: true,
      }
      break
    case 'END_GAME':
      state = {
        ...state,
        gameOver: {
          winner: 'O',
        },
      }
      break
    case 'GENERATE_BOARD':
      state = {
        ...state,
        crissCrossField: action.payload,
      }
      break
    case 'UPDATE_FIELD':
      const tileX = action.payload.tileX
      const tileY = action.payload.tileY
      const value = action.payload.value
      const newBoard = state.crissCrossField.slice()

      const field = newBoard.find(
        item => item.tileX === tileX && item.tileY === tileY
      )
      field.value = value

      const analysis = winAnalyzer(newBoard, state.currentPlayer)
      if (analysis.status !== 'continue') {
        state.gameOver = true
        state.winner = analysis.winner
        state.status = analysis.status
      }

      state = {
        ...state,
        currentPlayer: state.playersList.find(
          item => item !== state.currentPlayer
        ),
        crissCrossField: newBoard,
      }
      break
    case 'START_OVER':
      state = initialState
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
              <hr />
              <ul>
                <li>
                  <Link to={'/redux-works/redux-page'}>General Redux Page</Link>
                </li>

                <li>
                  <Link to={'/redux-works/tic-tac-toe'}>Tic-Tac-Toe</Link>
                </li>
              </ul>

              {children}
              <Footer />
              <script src="https://checkout.stripe.com/checkout.js" />
            </React.Fragment>
          </Provider>
        </div>
      )
    }}
  />
)
