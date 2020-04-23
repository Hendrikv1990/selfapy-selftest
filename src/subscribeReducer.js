import { combineReducers } from 'redux'

const initialState = {
  finalize: false,
}

const subscribe = (state = initialState, action) => {
  console.log(action)

  switch (action.type) {
    case 'finalize':
      return {
        ...state,
        finalize: true,
      }
    default:
      return state
  }
}

export default combineReducers({
  subscribe,
})
