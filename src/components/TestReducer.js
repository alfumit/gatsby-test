const initialState = {
  sitelet: 'redux-works',
  num: 0,
  itemList: [],
  generalData: [],
}
const TestReducer = (state = initialState, action) => {
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
      break}
  return state
}

export default TestReducer;
