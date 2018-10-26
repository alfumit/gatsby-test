import { combineReducers, createStore } from 'redux'
import TicTacToeReducer from '../TicTacToeGame/Reducer/TicTacToeReducer'
import TestReducer from '../TestReducer'
import MatchCenter from '../MatchCenter/Reducer/MatchCenterReducer'

const appReducer = combineReducers({TicTacToeReducer, TestReducer, MatchCenter});

const globalStore = createStore(appReducer)
export default globalStore
