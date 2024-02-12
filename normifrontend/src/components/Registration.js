import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialState = {
  fullname: "",
  email: "",
  phone: "",
  pwd: "",
};

function Registration() {
  const [state, setState] = useState(initialState);
  const [message, setMessage] = useState({});
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    // eslint-disable-next-line no-restricted-globals
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/regcode", state);
      setMessage(response.data);
    }
    catch (err) {
      console.log(err);
    }
  };
  const myFunction = (e) => {
    var x = document.getElementsByClassName("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  return (
    <div className="container-fluid my-2 ">
      <div>
        <h1 style={{ textAlign: "center" }}>Register to OdourNormi</h1>
      </div>
      <form action="" className="form-group" onSubmit={handleSubmit}>
        <table className="table" style={{ width: "80%", margin: "0 auto" }}>
          <tr>
            <td>
              <label htmlFor="fullname" className="form-label">
                Enter Name :-
              </label>
            </td>
            <td>
              <input
                type="text"
                name="username"
                id="fullname"
                onChange={handleChangeInput}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="email" className="form-label">
                Enter Email :-
              </label>
            </td>
            <td>
              <input
                type="email"
                id="email"
                onChange={handleChangeInput}
                name="useremail"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="phone">Enter your number</label>
            </td>
            <td>
              <input
                type="tel"
                name="usermobile"
                id="phone"
                onChange={handleChangeInput}
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="pwd">Enter Password</label>
            </td>
            <td>
              <input
                type="password"
                id="pwd"
                name="userpassword"
                className="myInput"
                onChange={handleChangeInput}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                required
              />
              <label htmlFor="">Show</label>
              <input type="checkbox" onClick={myFunction} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input
                type="submit"
                value="Register"
                className="btn btn-primary my-3"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center"><span className={`alert bg-${message.status} text-white`}>{message.message}</span></td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Registration;
