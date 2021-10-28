import React from 'react'
import { connect } from 'react-redux';

import './style.css'
import * as feedsActions from '../../../actions/feedsActions';
import Post from "../../Post";

const Posts = (props) => {

  console.log(props)

  return (
    <div className="feed">
    <div className="feedWrapper">
      {props.feeds.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  </div>

  )
}


const mapStateToProps = ({ feedsReducer }) => feedsReducer;


export default connect(mapStateToProps, feedsActions)(Posts);