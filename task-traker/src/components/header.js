import React from 'react'
import { IoIosPerson } from "react-icons/io";

function Header() {
  return (
   
    <nav className="navbar navbar-expand-lg  p-4" >
    <div className="container-fluid">
      <h3 className="navbar-brand fw-bold" >Task Board</h3>
     
      <div className="navbar-text d-flex align-items-center">
  <div className=" p-2 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' ,backgroundColor:"white"}}>
    <IoIosPerson style={{ width: '100%', height: 'auto',color:"black" }} />
  </div>
</div>

  
    </div>
  </nav>
  
  );
}

export default Header;
