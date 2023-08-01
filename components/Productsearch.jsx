import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function Productsearch() {
  const { productName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        if (response.status === 200) {
          const filteredProducts = response.data.filter((product) =>
            product.name.toLowerCase().includes(productName.toLowerCase())
          );
          setProducts(filteredProducts);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [productName]);

  return (
    <>
      <Navbar></Navbar>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        {products.map((product) => (
          <div className="card-container m-3" key={product.id}>
            <div className="card" style={{ width: "20rem", height: "30rem" }}>
              <img className="card-img-top" src={product.imageUrl} alt="Card"  style={{ width: "100%", height: "200px" }} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <h5 className="card-title">&#x20b9;{product.price}</h5>
                <a href="#" className="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Productsearch;
