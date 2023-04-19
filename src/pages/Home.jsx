import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

const Home = (props) => {
  return(
    <div className='home'>
     
      <Link to="/Animals"><div className='box box1'><h2>Animals</h2></div></Link>
      
      <Link to="/Birds"><div className='box box2'><h2>Birds</h2></div></Link>
    </div>
  )
}



export default Home;