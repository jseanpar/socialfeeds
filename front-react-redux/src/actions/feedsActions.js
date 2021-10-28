import axios from 'axios'


import { GET_FEEDS, LOADING, ERROR } from '../types/feedsTypes'
import { GET_LOCAL, GET_LOCALPORT } from '../types/envTypes'

export const getFeeds = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING
    })

    const response = await axios.get(`${GET_LOCAL}:${GET_LOCALPORT}/feeds/`)

    dispatch({
      type: GET_FEEDS,
      payload: response.data.feeds
    })
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message
    })
  }
}




