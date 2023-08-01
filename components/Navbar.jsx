import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { PersonCircle,Cart3,Bag } from 'react-bootstrap-icons';

function Navbar() {
  const [productName, setProductName] = useState("");

  const navigate = useNavigate();

  function inputChange(event) {
    const { value } = event.target;
    setProductName(value);
  }

  function search(event) {
    event.preventDefault();
    navigate(`/productsearch/${productName}`);
  }

  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top mb-2"> {/* Added 'fixed-top' class */}
        <a className="navbar-brand brandtitle" href="#">
          Timesphere
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <div className=" d-flex flex-row searchmargin">
          <form className="form-group d-flex flex-row my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 margin-2"
              type="search"
              placeholder="Search"
              value={productName}
              aria-label="Search"
              onChange={inputChange}
            />
            <button
              className="btn btn-outline-secondary btn-secondary my-2 my-sm-0 margin-2"
              type="submit"
              onClick={search}
            >
             <div style={{color:"white"}}> Search</div>
            </button>
          </form>
           <Link to="/profile" style={{color: 'white'}}><PersonCircle size={30} className="margin-2"/></Link>
           <Link to="/cart" style={{color: 'White'}}><Cart3 size={30} className="margin-2" /></Link>
           <Link to="/orders" style={{color: 'White'}}><Bag size={25} className="margin-2" /></Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
