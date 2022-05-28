import React from "react";
import { Outlet, Link } from "react-router-dom";

const Nav =()=>{
return(
  <div>
    <nav className="ma">
      <h3>
            <Link to={'/Home'} >Home</Link>
    <Link className="pa" to={'/Slyder'} > Slyder  </Link>
    <Link  to={'/DList'} >  DList   </Link>
    <Link className="pa"to={'/list'} >  ChengeText   </Link>
    <Link to={'/GessNumber'} >  gess number   </Link>
    <Link className="pa" to={'/Converter'} >Converter</Link>
    <Link to={'/Task'} >  Chess </Link>
      </h3>

      
    </nav>
    <Outlet/>
  </div>
)
}
export default Nav