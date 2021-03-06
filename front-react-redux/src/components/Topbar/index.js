import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

const Topbar = () => (
  <div className="topbarContainer">
  <div className="topbarLeft">
    <span className="logo">SocialFeeds</span>
  </div>
  <div className="topbarCenter">
    <div className="searchbar">
      <Search className="searchIcon" />
      <input
        placeholder="Busca un feed"
        className="searchInput"
      />
    </div>
  </div>
  
  <div className="topbarRight">
    <div className="topbarLinks">
      <span className="topbarLink">Home</span>
      <span className="topbarLink"><Link to='/login'>Cerrar sesión</Link></span>
    </div>
    <div className="topbarIcons">
      <div className="topbarIconItem">
        <Person />
        <span className="topbarIconBadge">1</span>
      </div>
      <div className="topbarIconItem">
        <Chat />
        <span className="topbarIconBadge">2</span>
      </div>
      <div className="topbarIconItem">
        <Notifications />
        <span className="topbarIconBadge">1</span>
      </div>
    </div>
    <img src='assets/person/1.jpeg' alt="" className="topbarImg"/>
  </div>
</div>
)

export default Topbar