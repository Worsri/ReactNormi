import React, { useState } from 'react'
import "../css/login.scss";



function Login() {
  
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);

 };
  
  return (
    <>
       
      <div className="container maindiv">
      {/* <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit"  />
      </form> */}

      <h3 className="text-center mb-3">
        {" "}
        <span className="cp ">Login</span> <span className="cp">to </span>{" "}
        <span className="cs">OdourNORMI </span>
      </h3>

      <form className="">
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" />
          <label className="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" />
          <label className="form-label" for="form2Example2">
            Password
          </label>
        </div>

        {/* <!-- 2 column grid layout for inline styling --> */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* <!-- Checkbox --> */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label className="form-check-label" for="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col">
            {/* <!-- Simple link --> */}
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        {/* <!-- Submit button --> */}
        <button
          type="button"
          className="btn btn-primary btn-block mb-4 offset-5"
          >
          Sign in
        </button>

        {/* <!-- Register buttons /--> */}
        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              Sign up
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              something
            <i className="fab fa-twitter"></i>
          </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              something2
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Login