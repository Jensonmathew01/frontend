import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
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

function SignUp() {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [validationError, setValidationError] = useState('');

  function inputChange(event) {
    const { name, value, type, checked } = event.target;
    setSignupData((prevState) => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  }

  function signup(event) {
    event.preventDefault();
    event.target.disabled = true;

    // Validate form data
    if (!validateFormData()) {
      return;
    }

    const payload = {
      firstName: signupData.firstName,
      lastName: signupData.lastName,
      email: signupData.email,
      password: signupData.password
    };

    axios
      .post('http://localhost:3000/user', payload)
      .then((response) => {
        if (response.status === 201) {
          console.log('signup');
          navigate('/user');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function validateFormData() {
    if (
      !signupData.firstName ||
      !signupData.lastName ||
      !signupData.email ||
      !signupData.password ||
      !signupData.confirmPassword
    ) {
      setValidationError('All fields are required');
      return false;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setValidationError('Password and Confirm Password do not match');
      return false;
    }

    if (!isValidEmail(signupData.email)) {
      setValidationError('Invalid email address');
      return false;
    }

    if (!isValidPassword(signupData.password)) {
      setValidationError('Password must contain at least 8 characters including a lowercase letter, an uppercase letter, and a number');
      return false;
    }

    setValidationError('');
    return true;
  }

  function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPassword(password) {
    // Regular expression for password validation: at least 8 characters including a lowercase letter, an uppercase letter, and a number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  }

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className='my-5 display-3 fw-bold ls-tight px-3' style={{ color: 'hsl(218, 81%, 95%)' }}>
            The best offer <br />
            <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your Watches</span>
          </h1>
          <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
            Discover the Best Watches World, where timekeeping meets exceptional craftsmanship and exquisite design.
            Immerse yourself in a collection of premium timepieces from renowned brands that embody precision, elegance,
            and timeless style. From classic designs to cutting-edge innovations, our curated selection offers the finest
            watches for discerning individuals who appreciate the artistry and sophistication of horology. Elevate your
            wrist with the epitome of luxury and precision, and experience the world of timekeeping excellence like never
            before.
          </p>
        </MDBCol>
        <MDBCol md='6' className='position-relative'>
          <MDBCard className='my-5 bg-glass '>
            <MDBCardBody className='p-5'>
              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' onChange={inputChange} value={signupData.firstName} name='firstName' />
                </MDBCol>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' onChange={inputChange} value={signupData.lastName} name='lastName' />
                </MDBCol>
              </MDBRow>
              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' onChange={inputChange} value={signupData.email} name='email' />
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' onChange={inputChange} value={signupData.password} name='password' />
              <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form5' type='password' onChange={inputChange} value={signupData.confirmPassword} name='confirmPassword' />

              {validationError && <div className='text-danger mb-4'>{validationError}</div>}

              <MDBBtn className='w-100 mb-4' size='md' onClick={signup}>
                Sign up
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignUp;
