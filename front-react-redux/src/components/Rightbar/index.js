import React, { Component } from 'react'
import { connect } from 'react-redux'

import Users from './Users'
import Loading from '../Loading'
import Fatal from '../Fatal'

import * as usersActions from '../../actions/usersActions'

class Rightbar extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.getUsers()
    }
  }

  render() {
    if (this.props.isLoading) return <Loading />

    if (this.props.error) return <Fatal error={this.props.error} />

    return <Users />
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
}

export default connect(mapStateToProps, usersActions)(Rightbar)
