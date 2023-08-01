import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import ProductForm from "./ProductForm";

function AdminDashboard() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:8100',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Access-Control-Allow-Credentials': 'true',
      },
    });

    axiosInstance
      .get('/api/products')
      .then((response) => {
        if (response.status === 200) {
          setProduct(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  function update(id) {
    navigate(`/update/${id}`);
  }

  return (
    <>
      <Navbar />
      {product && (
        <div className="card shadow mt-5" style={{ width: "100%" }}>
          <div className="container mt-4">
            <div className="card-body">
              <h2 className="card-title">
                Products
                <button className="btn btn-success margin-add">Add New</button>
              </h2>
              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Desc</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((pro) => (
                      <tr key={pro.id}>
                        <td>{pro.id}</td>
                        <td>{pro.name}</td>
                        <td>
                          <img
                            src={pro.imageUrl}
                            alt=""
                            className="img-fluid"
                            style={{ width: "100px", height: "100px" }}
                          />
                        </td>
                        <td>{pro.description}</td>
                        <td>{pro.price}</td>
                        <td>
                          <button
                            className="btn btn-primary m-2"
                            onClick={() => update(pro.id)}
                          >
                            Update
                          </button>
                          <button className="btn btn-danger m-2">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </>
  );
}

export default AdminDashboard;
