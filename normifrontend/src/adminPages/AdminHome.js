import React, { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const initialState = {
  notification: "",
};

function AdminHome() {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState([]);
  const { notificationtext } = state;
  const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/add", state)
      .then(() => {
        setState({ notificationtext: "" });
        navigate("/adminzone/adminhome");
        // setTimeout(() => , 500);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/viewnotification");
    setData(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  const deletenotification = (id) => {
    if (window.confirm("Are you sure ...?")) {
      axios.delete(`http://localhost:5000/deletenotification/${id}`);
      setTimeout(() => {
        loadData();
      }, 500);
    }
  };

  return (
    <>
      <div>
        <AdminHeader />
        <div
          className="row mt-2"
          style={{ minHeight: "600px", backgroundColor: "#EEE" }}
        >
          <div className="col-sm-12">
            <h1 style={{ textAlign: "center", color: "blue" }}>
              Add News & Events
            </h1>
            <form className="form-group" onSubmit={handleSubmit}>
              <table
                className="table"
                style={{ margin: "0 auto", width: "60%" }}
              >
                <tr>
                  <td>
                    <label className="form-label" htmlFor="notificationtext">
                      Enter Notification
                    </label>
                  </td>
                  <td>
                    <textarea
                      className="form-control"
                      name="notificationtext"
                      id=""
                      cols="30"
                      rows="3"
                      onChange={handleInput}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button type="submit" className="btn bg-primary ">
                      Add
                    </button>
                  </td>
                </tr>
              </table>
            </form>
            <br />
            <br />

            <table className="table" style={{ margin: "0 auto", width: "70%" }}>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Notification</th>
                  <th>Posted Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) => {
                  return (
                    <tr key={value.id}>
                      <td>{index + 1}</td>
                      <td>{value.notificationtext}</td>
                      <td>{value.posteddate}</td>
                      <td>
                        <button onClick={() => deletenotification(value.id)}>
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AdminHome;
