import axios from 'axios'


import { GET_USERS, GET_TOKEN, LOADING, ERROR } from '../types/usersTypes'
import { GET_LOCAL, GET_LOCALPORT } from '../types/envTypes'



export const getUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING
    })

    const response = await axios.get(`${GET_LOCAL}:${GET_LOCALPORT}/users/`)
    
    dispatch({
      type: GET_USERS,
      payload: response.data.users
    })
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message
    })
  }
}

export const getToken = (token) => (dispatch) => {

  dispatch({
    type: GET_TOKEN,
    payload: token
  })

}