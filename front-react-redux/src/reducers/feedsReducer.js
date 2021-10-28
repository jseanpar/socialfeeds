import { GET_FEEDS, LOADING, ERROR } from '../types/feedsTypes'

const INITIAL_STATE = {
  feeds: [],
  isLoading: false,
  error: null,
  description: '',
  createDate: '',
  active: '',
  redirect: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FEEDS:
      return { ...state, feeds: action.payload, isLoading: false, error: null }
    case LOADING:
      return { ...state, isLoading: true }
    case ERROR:
      return { ...state, error: action.payload, isLoading: false }
    case 'CHANGE_DESCRIPTION':
      return { ...state, description: action.payload }
    case 'CHANGE_CREATEDATE':
      return { ...state, createDate: action.payload }
    case 'CHANGE_ACTIVE':
      return { ...state, active: action.payload }
    case 'AGGREGATED':
      return {
        ...state,
        feeds: {},
        isLoading: false,
        error: '',
        redirect: true
      }
    default:
      return state
  }
}