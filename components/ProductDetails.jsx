import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

function ProductDetails() {
  const { productName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products", {
          params: { name: productName }
        });
        if (response.status === 200) {
          setProducts(response.data);
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
    <div className="product-deatil-margin">
      {products.map((product) => (
        <center key={product.id}>
          <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={product.imageUrl} className="img-fluid rounded-start" alt="Product" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <div className="rating">
                    <input type="radio" id="star5" name="rating" value="5" />
                    <label htmlFor="star5"></label>
                    <input type="radio" id="star4" name="rating" value="4" />
                    <label htmlFor="star4"></label>
                    <input type="radio" id="star3" name="rating" value="3" />
                    <label htmlFor="star3"></label>
                    <input type="radio" id="star2" name="rating" value="2" />
                    <label htmlFor="star2"></label>
                    <input type="radio" id="star1" name="rating" value="1" />
                    <label htmlFor="star1"></label>
                  </div>
                  <p className="card-text">{product.description}</p>
                  <div>
                    <br />
                    <b>Type</b>: Regular<br />
                    <b>Colour</b>: Brown<br />
                    <b>Material</b>: Clay<br />
                    <br />
                    <button type="button" className="btn btn-dark">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </center>
      ))}
    </div>
    </>
  );
}

export default ProductDetails;
