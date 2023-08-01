import React,{useState,useEffect} from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
function ProductForm() {
      const { id } = useParams();
      const [exsitingData,setExsitingData]=
      useState({
        name:'',
        price:'',
        description:'',
        imageUrl:''
      })
      useEffect(() => {
        const axiosInstance = axios.create({
          baseURL: 'http://localhost:8100',
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:5173',
            'Access-Control-Allow-Credentials': 'true',
          },
        });
    
        axiosInstance
          .get(`/api/products/${id}`)
          .then((response) => {
            if (response.status === 200) {
              setExsitingData(response.data);
            }
          })
          .catch((error) => console.log(error));
      }, []);
      console.log(exsitingData);
     const [updateData,setUpdateData]= useState({
       name:exsitingData.name,
       price:exsitingData.price,
       description:exsitingData.description,
       imageUrl:exsitingData.price
     })
     function inputChange(event) {
      const { name, value, type, checked } = event.target;
      setUpdateData(prevState => {
        return {
          ...prevState,
          [name]: type === 'checkbox' ? checked : value
        };
      });
    
    }
    function update(){
     // console.log(updateData);
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
        
           
             id: selectedProduct.id,
             name: selectedProduct.name,
             price: selectedProduct.price,
             description: selectedProduct.description,
             imageUrl: selectedProduct.imageUrl,
             
           
      
       })
       .then((response) => {
        // console.log(response);
        // console.log(response.status);
             })
       .catch((error) => {
         //console.log(error.response.status);
         if(error.response.status==404){
          // console.log("hello")
         }
       });
    }
    
  return (
    <div className="container">
      <h2>Update Product {id}</h2>
      <form>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            required
            onChange={inputChange}
            value={updateData.name}
            name="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            required
            min="1"
            onChange={inputChange}
            value={updateData.price}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            required
            onChange={inputChange}
            value={updateData.description}
           
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="imageURL">Image URL:</label>
          <input
            type="url"
            className="form-control"
            id="imageURL"
            
            required
            onChange={inputChange}
            value={updateData.imageUrl}
            name="imageUrl"
          />
        </div>

        <br />

        <button type="button"  className="btn btn-dark" onClick={update}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
