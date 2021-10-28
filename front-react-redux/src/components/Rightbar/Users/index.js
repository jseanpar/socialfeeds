import React from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router'

import "./style.css";
import * as usersActions from "../../../actions/usersActions";
import User from "../../User";

const Users = (props) => {
  if(!props.token){
   return <Redirect to='/login'/>;
  } 

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <h4 className="rightbarTitle">Users</h4>
        <div className="rightbarFollowings">
          {props.users.map((p) => (
            <User key={p.id} user={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ usersReducer }) => usersReducer;

export default connect(mapStateToProps, usersActions)(Users);
