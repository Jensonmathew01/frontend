import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import RatingInput from "./RatingInput"
import { useJwt } from "react-jwt";
function Orders() {
  const token = localStorage.getItem("token");
  console.log(token);
  const { decodedToken, isExpired } = useJwt(token);
  console.log(decodedToken);
  console.log(isExpired);
  localStorage.setItem("token", token);

  return (
    <>
      <Navbar />
      <SideBar />
      <section className="h-100 mt-4">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="centered-container">
                  <h3 className="fw-normal mb-0 text-black">Orders</h3>
                </div>
              </div>
                    <div
                      className="card rounded-3 mb-3"
                      style={{ height: '150px' }}
                    >
                      <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src="https://content.rolex.com//v7/dam/2023/upright-c/m128349rbr-0031.png?impolicy=v7-drp-front-facing"
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                              style={{ height: '100px' }}
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">Product 1</p>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                           Product Desccriprion
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <RatingInput/>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Orders;
