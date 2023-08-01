import React from "react";
import { useJwt } from "react-jwt";
import { Outlet, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Auth() {
  const token = localStorage.getItem("token");
  console.log("Token:", token);
  const decoded = jwt_decode(token); 
  console.log(decoded.roles);

//   if (!token) {
//     // No token found, redirect to login or handle the authentication flow
//     console.log("Token not found, redirecting to login");
//     return <Navigate to="/user" />;
//   }

 const { decodedToken, isExpired } = useJwt(token);
//   console.log("Decoded Token:", decodedToken);

//   if (!decodedToken) {
//     console.log("Failed to decode token");
//     // Handle the case when the token cannot be decoded
//     return <Navigate to="/user" />;
//   }

  if (isExpired || decoded.roles.includes("ROLE_ADMIN")) {
    console.log("Expired token with ROLE_ADMIN, redirecting to login");
    return <Navigate to="/user" />;
  }

  return <Outlet />;
}

export default Auth;
