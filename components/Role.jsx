import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function Role() {
  const navigate = useNavigate();
  const adminClick = () => {
    navigate("/admin");
  };
  const userClick = () => {
    navigate("/user");
  };
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-dark bg- fixed-top mb-2"> {/* Added 'fixed-top' class */}
      <a className="navbar-brand brandtitle " href="#">I-Craft</a> 
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

        <div className="collapse navbar-collapse navmargin" id="navbarSupportedContent">
          <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
            <DropdownButton id="dropdown-basic-button" variant="dark" title="Login">
            <Dropdown.Item href="#/action-1" onClick={adminClick}>Admin</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={userClick}>User</Dropdown.Item>
          </DropdownButton>
  
           </li>
          </ul>
          </div>
        
    
        </div>
      </nav>
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="carouselImg"
              src="https://images.pexels.com/photos/4253609/pexels-photo-4253609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Uncover Hidden Gems</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={100}>
            <img
              className="carouselImg"
              src="https://images.pexels.com/photos/4898081/pexels-photo-4898081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Experience the Timeless Elegance</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselImg"
              src="https://images.unsplash.com/photo-1546753051-f9cbab09c91b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Explore Time-Honored Techniques</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Role;
