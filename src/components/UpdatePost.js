import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isData, setIsData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleInputeChnage = (e) => {
    const { name, value } = e.target;

    setIsData({ ...isData, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3600/${id}`)
      .then((response) => {
        setIsData({
          name: response.data.name,
          email: response.data.email,
          age: response.data.age,
        });
      })
      .then((error) => {
        console.error(error);
      });
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(`http://localhost:3600/${id}`, isData);
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
    <div className="container my-2">
      <h2 className="text-center">Edit Post</h2>
      <form onSubmit={handleEdit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            value={isData.name}
            onChange={handleInputeChnage}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            value={isData.email}
            onChange={handleInputeChnage}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            className="form-control"
            type="number"
            id="age"
            name="age"
            value={isData.age}
            onChange={handleInputeChnage}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;
