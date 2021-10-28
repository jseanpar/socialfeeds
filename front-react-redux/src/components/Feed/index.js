import React, { Component } from 'react'
import { connect } from 'react-redux'

import Posts from './Posts'
import Loading from '../Loading'
import Fatal from '../Fatal'

import * as feedsActions from '../../actions/feedsActions'

class Feed extends Component {
  componentDidMount() {
    if (!this.props.feeds.length) {
      this.props.getFeeds()
    }
  }

  render() {
    if (this.props.isLoading) return <Loading />

    if (this.props.error) return <Fatal error={this.props.error} />

    return <Posts />
  }
}

const mapStateToProps = (reducers) => {
  return reducers.feedsReducer;
}

export default connect(mapStateToProps, feedsActions)(Feed)
