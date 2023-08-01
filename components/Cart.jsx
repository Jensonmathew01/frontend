import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Navbar from './Navbar';

function Cart() {
  const [cartData, setCartData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Access-Control-Allow-Credentials': 'true',
      },
    });

    axiosInstance
      .get(`/carts/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          setCartData(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (cartData) {
      const totalPrice = cartData.reduce(
        (sum, cart) =>
          sum +
          cart.cartItems.reduce(
            (itemSum, item) => itemSum + item.price * item.quantity,
            0
          ),
        0
      );
      setTotalPrice(totalPrice);
    }
  }, [cartData]);

  const increaseQuantity = (cartId, itemId) => {
    const updatedCartData = cartData.map((cart) => {
      if (cart.cartid === cartId) {
        const updatedItems = cart.cartItems.map((item) => {
          if (item.id === itemId) {
            const updatedQuantity = item.quantity + 1;
            const updatedItem = { ...item, quantity: updatedQuantity };
            updateItemInDatabase(cartId, itemId, updatedItem);
            return updatedItem;
          }
          return item;
        });
        return { ...cart, cartItems: updatedItems };
      }
      return cart;
    });
    setCartData(updatedCartData);
  };

  const decreaseQuantity = (cartId, itemId) => {
    const updatedCartData = cartData.map((cart) => {
      if (cart.cartid === cartId) {
        const updatedItems = cart.cartItems.map((item) => {
          if (item.id === itemId && item.quantity > 1) {
            const updatedQuantity = item.quantity - 1;
            const updatedItem = { ...item, quantity: updatedQuantity };
            updateItemInDatabase(cartId, itemId, updatedItem);
            return updatedItem;
          }
          return item;
        });
        return { ...cart, cartItems: updatedItems };
      }
      return cart;
    });
    setCartData(updatedCartData);
  };

  const deleteCartItem = (cartId, itemId) => {
    const updatedCartData = cartData.map((cart) => {
      if (cart.cartid === cartId) {
        const updatedItems = cart.cartItems.filter((item) => item.id !== itemId);
        deleteCartItemFromDatabase(cartId, itemId);
        return { ...cart, cartItems: updatedItems };
      }
      return cart;
    });
    setCartData(updatedCartData);
  };

  const updateItemInDatabase = (cartId, itemId, updatedItem) => {
    console.log(updatedItem);
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Access-Control-Allow-Credentials': 'true',
      },
    });

    axiosInstance
      .put(`/carts/${userId}`, {
        cartid: cartId,
        userid: userId,
        cartItems: [updatedItem],
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCartItemFromDatabase = (cartId, itemId) => {
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Access-Control-Allow-Credentials': 'true',
      },
    });

    axiosInstance
      .delete(`/carts/${userId}/${cartId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <section className="h-100">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="centered-container">
                  <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                </div>
              </div>
              {cartData &&
                cartData.map((cart) =>
                  cart.cartItems.map((item) => (
                    <div
                      className="card rounded-3 mb-3"
                      key={item.id}
                      style={{ height: '150px' }}
                    >
                      <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={item.imageUrl}
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                              style={{ height: '100px' }}
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">{item.name}</p>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onClick={() => decreaseQuantity(cart.cartid, item.id)}
                            >
                              <i className="fas fa-minus"></i>
                            </button>
                            <h6>{item.quantity}</h6>
                            <button
                              className="btn btn-link px-2"
                              onClick={() => increaseQuantity(cart.cartid, item.id)}
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">{item.price * item.quantity}</h5>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a
                              href="#!"
                              className="text-danger"
                              onClick={() => deleteCartItem(cart.cartid, item.id)}
                            >
                              <i className="fas fa-trash fa-lg"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="mb-3">Total Price:</h4>
                    </div>
                    <div className="col-md-6 text-end">
                      <h4 className="mb-3">{totalPrice}</h4>
                    </div>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary" type="button">
                      Proceed to Checkout
                    </button>
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

export default Cart;
