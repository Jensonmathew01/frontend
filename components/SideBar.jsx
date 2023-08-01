import React from "react";
import Nav from 'react-bootstrap/Nav';
import {PersonVcardFill,BagCheckFill} from 'react-bootstrap-icons'
function SideBar() {
  return (

    <Nav defaultActiveKey="/home" className="flex-column bg-dark fixed-top " style={{ width: '10rem', height: '100%', marginTop :"4%" }}>
      <div style={{marginTop:"30%"}}>
      <Nav.Link href="/profile" style={{color: 'grey'}} className="d-flex"><PersonVcardFill  className="margin-2" size={20}/><div style={{  marginLeft :"4%" }} >Profile</div></Nav.Link>
      <Nav.Link href="/orders"style={{color: 'grey'}}className="d-flex"><BagCheckFill className="margin-2"size={20}/><div style={{  marginLeft :"4%" }} >Order</div></Nav.Link>
      </div>
    </Nav>
  );
}

export default SideBar;
