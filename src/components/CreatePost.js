import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [isData, setIsData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const navigate = useNavigate();

  const handleInputeChnage = (e) => {
    const { name, value } = e.target;

    setIsData({ ...isData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3600", isData);
      console.log(response.data);
      setIsData({
        name: "",
        email: "",
        age: "",
      });
      navigate("/all-post");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container justify-content-center mt-4">
      <h2 className="bg-dark-subtle text-black p-3">Create Post</h2>
      <form
        onSubmit={handleFormSubmit}
        className="border bg-dark-subtle p-4 text-black"
      >
        <div className="row justify-content-center mt-4">
          <div className="col-2">
            <label className="form-label">Name</label>
          </div>
          <div className="col-auto">
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={isData.name}
              onChange={handleInputeChnage}
            />
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-2">
            <label className="form-label">Email address</label>
          </div>
          <div className="col-auto">
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={isData.email}
              onChange={handleInputeChnage}
            />
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-2">
            <label className="form-label">Age</label>
          </div>
          <div className="col-auto">
            <input
              className="form-control"
              type="number"
              id="age"
              name="age"
              value={isData.age}
              onChange={handleInputeChnage}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-info bg-info-subtle mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
