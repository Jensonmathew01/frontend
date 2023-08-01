import React from "react";
function Adminlogin(){
    return(
        <div className="container bg-aquamarine">
        <div className="card w-75 h-25 mx-auto mt-5">
          <div className="card-body">
            <h2 className="card-title">Admin Login</h2>
             
            <small id="emailHelp" className="form-text text-muted">
                  Welcome back admin.. please enter your credentials
                </small>
  
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className=" mt-3">
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    
    )
}
export default Adminlogin;