import React from 'react';
import { FcBriefcase } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "../App.css"
const Nav  = () => {
  const { totalQuantities}= useSelector(state=>state.CartReducer)
    return (
        <nav className="navbar navbar-light bg-light" >
        <div className="container">
          <a className="navbar-brand" href="#">
        <Link to="/">    <img src="/Images/l.png" alt="" width={80} height={50} />
          </Link>
          </a>
          </div>
         <div className="nav_right">
              <Link to="/cart">
                  <div className="busket">
<FcBriefcase className="icon" />
<span>{totalQuantities}</span>
</div>
              </Link>
        
</div>
       
       
      </nav>
     
    );}
   

export default  Nav
