import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
    <nav >
    <div>
        <ul >
          <li >
            <a  href="#">Home</a>
          </li>
          <li >
            <a  href="#">LeaderBoard</a>
          </li>
          <li >
            <a  href="#">Eventos</a>
          </li>
          <li >
            <a >Work Outs</a>
          </li>
        </ul>
        </div>
        <a href="#" class="profile-button"><img src="colo.jpg" alt="Profile"/></a>   
  </nav>

  <div className="card-container">
  <div className="card">
    <img src="..." alt="..." />
    <div>
      <h5>Card title</h5>
      <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#">Go somewhere</a>
    </div>
  </div>
</div>


  </>
  )
}

export default Home