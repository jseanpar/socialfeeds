import React from 'react'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import Feed from '../../components/Feed'
import Rightbar from '../../components/Rightbar'
import "./style.css"

const Home = () => (
  <>
  <Topbar />
  <div className="homeContainer">
    <Sidebar />
    <Feed />
    <Rightbar/>
  </div>
</>
)

export default Home