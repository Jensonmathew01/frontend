import React from "react";
import Navbar from "./Navbar";
import {PersonBadgeFill} from 'react-bootstrap-icons';
import SideBar from "./SideBar";
import {BrowserRouter as Router ,Route,Routes,useNavigate} from 'react-router-dom';
import RatingInput from "./RatingInput";
function UserProfile(){
     const navigate = useNavigate();

    function logout(){
         localStorage.removeItem("token")
        let tocken = localStorage.getItem("token")
        console.log(tocken)
         navigate("/")
    }
    return(
        <>
        <Navbar></Navbar>
        <SideBar></SideBar>
        <div className="container d-flex justify-content-center align-items-center user-profile-margin" style={{ height: '100vh' }}>
        <div className="card d-flex justify-content-center align-items-center" style={{ width: '30rem' }}>
        <PersonBadgeFill className="product-deatil-margin" size={70}/>
        <div className="card-body">
        <div className="card-text d-flex flex-column justify-content-center align-items-center">
                   <p> FirstName:</p>
                   <p> LastName:</p>
                   <p> Address:</p>
                   <p> Email:</p>
                   <p> Phone:</p>
        </div>
        </div>
        <div className="d-grid gap-2 d-md-block">
        <button className="btn btn-dark m-2" type="button" onClick={logout}>LogOut</button>
        <button className="btn btn-dark m-2" type="button">Update</button>
        </div>
        </div>
        </div> 
        
        </>
    )

}
export default UserProfile;