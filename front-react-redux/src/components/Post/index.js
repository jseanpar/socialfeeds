import React from "react";
import "./style.css";
import { MoreVert } from "@material-ui/icons";
import Like from "../../assets/like.png";
import Heart from "../../assets/heart.png";

const formatDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

  if (hours === 0) hours = "00";
  if (minutes === 0) minutes = "00";
  if (seconds === 0) seconds = "00";
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return (
    [day, month, year].join("-") + " " + [hours, minutes, seconds].join(":")
  );
};

const Post = ({ post }) => (
  <div className="post">
    <div className="postWrapper">
      <div className="postTop">
        <div className="postTopLeft">
          <img
            className="postProfileImg"
            src={"assets/person/" + post.id_owner + ".jpeg"}
            alt=""
          />
          <span className="postUsername">{post.name}</span>
          <span className="postDate">{formatDate(post.date)}</span>
        </div>
        <div className="postTopRight">
          <MoreVert />
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">{post?.description}</span>
        <img className="postImg" src={post.image} alt="" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img className="likeIcon" src={Like} alt="" />
          <img className="likeIcon" src={Heart} alt="" />
          <span className="postLikeCounter">45 les gusta esto</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">{post.comment} comentarios</span>
        </div>
      </div>
    </div>
  </div>
);

export default Post;
