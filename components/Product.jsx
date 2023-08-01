import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import CarouselProduct from "./CarouselProduct";
import BrandCarousel from "./BrandCarousel";

function Product() {
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState(0);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  let cartId =10

  function viewProduct(productName) {
    navigate(`/productdetail/${productName}`);
  }

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
          setProducts(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  function addToCart(productId) {
    cartId++;
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8080",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Access-Control-Allow-Credentials": "true",
      },
    });

    const selectedProduct = products.find((product) => product.id === productId);

    axiosInstance
      .put(`/carts/${userId}`, {
        cartid: cartId,
        userid: userId,
        cartItems: [
          {
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            description: selectedProduct.description,
            imageUrl: selectedProduct.imageUrl,
            quantity: 1,
          },
        ],
      })
      .then((response) => {
       // console.log(response);
       // console.log(response.status);
            })
      .catch((error) => {
        //console.log(error.response.status);
        if(error.response.status==404){
          cartId++;
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8080",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Access-Control-Allow-Credentials": "true",
      },
    });

    const selectedProduct = products.find((product) => product.id === productId);

    axiosInstance
      .post(`/carts`, {
        cartid: cartId,
        userid: userId,
        cartItems: [
          {
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            description: selectedProduct.description,
            imageUrl: selectedProduct.imageUrl,
            quantity: 1,
          },
        ],
      })
      .then((response) => {
       console.log(response);
       // console.log(response.status);
            })
      .catch((error) => {
        //console.log(error.response.status);
        if(error.response.status==404){
         // console.log("hello")
        }
      });
        }
      });
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <CarouselProduct />
      <BrandCarousel />
      <div className="d-flex flex-row flex-wrap m-4 justify-content-center">
        {products.map((product) => (
          <div className="card-container m-3" key={product.id}>
            <div className="card" style={{ width: "20rem", height: "30rem" }}>
              <img
                className="card-img-top"
                src={product.imageUrl}
                alt="Card"
                style={{ width: "100%", height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <h5 className="card-title">&#x20b9;{product.price}</h5>
                <button
                  href="#"
                  className="btn btn-dark"
                  onClick={() => addToCart(product.id)}
                >
                  Add to cart
                </button>
                <button
                  href="#"
                  className="btn btn-dark button-margin"
                  onClick={() => viewProduct(product.name)}
                >
                  View Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
