import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import TicTacToeReducer from '../TicTacToeGame/Reducer/TicTacToeReducer'
import TestReducer from '../TestReducer'
import MatchCenter from '../MatchCenter/Reducer/MatchCenterReducer'

const appReducer = combineReducers({TicTacToeReducer, TestReducer, MatchCenter});

const globalStore = createStore(appReducer, applyMiddleware(thunk))
export default globalStore
