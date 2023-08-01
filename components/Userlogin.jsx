import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
} from 'mdb-react-ui-kit';

import { useJwt } from "react-jwt";
let token = "";

const Userlogin = () => {
  const { decodedToken, isExpired } = useJwt(token);

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [validationError, setValidationError] = useState('');

  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();
    event.target.disabled = true;

    // Validate form data
    if (!validateFormData()) {
      return;
    }

    const payload = {
      email: loginData.email,
      password: loginData.password
    };

    const axiosInstance = axios.create({
      baseURL: "http://localhost:8200",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Access-Control-Allow-Credentials": "true",
      },
    });

    axiosInstance
      .post('http://localhost:8200/api/auth/authenticate', payload)
      .then(response => {
        if (response.status === 200) {
          console.log('login');
         
          let token = response.data.token;
          localStorage.setItem("token", token);
          navigate("/product");
        }
      })
      .catch(err => {
        setValidationError("Invalid credentials"); // Set validation error message
      });
  }

  function validateFormData() {
    if (!loginData.email || !loginData.password) {
      setValidationError("Email and password are required"); // Set validation error message
      return false;
    }

    setValidationError(''); // Clear validation error message
    return true;
  }

  function inputChange(event) {
    const { name, value, type, checked } = event.target;
    setLoginData(prevState => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  }

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient-user overflow-hidden'>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            Welcome to  <br />
            <span style={{color: 'hsl(26, 79%, 79%)'}}>TimeSphere</span>
          </h1>
          <p className='px-3' style={{color: 'hsl(26, 79%, 79%)'}}>
            Explore a wide range of premium watches from renowned brands.
            Find the perfect timepiece that suits your style and enhances your wrist.
            Experience the elegance, craftsmanship, and precision of our curated selection.
          </p>
        </MDBCol>
        <MDBCol md='6' className='position-relative'>
          <MDBCard className='my-5 bg-glass ml-5 cardmargin' style={{ maxWidth: '400px' }}>
            <MDBCardBody className='p-5'>
              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' onChange={inputChange} value={loginData.email} name="email" />
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' onChange={inputChange} value={loginData.password} name="password" />

              {validationError && <div className="text-danger mb-4">{validationError}</div>}

              <MDBBtn className='w-100 mb-4' size='md' onClick={login}>Login</MDBBtn>
              Not a member? <a className="a-color" href="/signup">Register Now</a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Userlogin;
