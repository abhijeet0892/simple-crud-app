import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReadPost = () => {
  const [IsData, setIsData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3600");
      setIsData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3600/${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container my-2">
      <h2 className="text-center p-4">All Post</h2>

      <div className="row">
        {IsData?.map((ele) => (
          <div key={ele._id} className="col-3 mb-4">
            <div className="card bg-primary-subtle">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h5 className="card-subtitle mb-2 text-muted">{ele.email}</h5>
                <p className="text-muted">{ele.age}</p>

                <Link to={`/${ele._id}`} className="card-link">
                  Edit
                </Link>

                <a
                  href="#"
                  className="card-link"
                  onClick={() => handleDelete(ele._id)}
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadPost;
