import React from "react";
import MERN from "../img/MERN.jpeg";
import MongoDB from "../img/MongoDB.jpg";
import ExpressJS from "../img/ExpressJS.jpg";
import ReactJS from "../img/ReactJS.jpg";
import NodeJS from "../img/NodeJS.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img
              src={MERN}
              className="card-img-top custom-card-img"
              alt="MERN"
            />
            <div className="card-body">
              <h5 className="card-title">MERN</h5>
              <p className="card-text text-start">
                - MERN stack development is a popular technology stack used for
                building web applications. <br />- It is an acronym that stands
                for four key technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={MongoDB}
              className="card-img-top custom-card-img"
              alt="MongoDB"
            />
            <div className="card-body">
              <h5 className="card-title">MongoDB</h5>
              <p className="card-text text-start">
                - This is a NoSQL database that stores data in a flexible,
                JSON-like format. <br />- It's well-suited for handling large
                volumes of unstructured or semi-structured data and is commonly
                used in MERN stack application to store and retrieve data.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={ExpressJS}
              className="card-img-top custom-card-img"
              alt="ExpressJS"
            />
            <div className="card-body">
              <h5 className="card-title">ExpressJS</h5>
              <p className="card-text text-start">
                - This is a web application framework for Node.js, which is a
                JavaScript runtime.
                <br />- Express.js simplifies the process of building robust and
                scalable web applications by providing a set of features and
                tools for routing, handling HTTP requests, and managing
                middleware.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={ReactJS}
              className="card-img-top custom-card-img"
              alt="ReactJS"
            />
            <div className="card-body">
              <h5 className="card-title">ReactJS</h5>
              <p className="card-text text-start">
                - React is a JavaScript library developed by Facebook for
                building user interfaces. It allows developers to create
                interactive and dynamic UI components efficiently.
                <br />- React is used for the fronted of MERN applications,
                enabling the creation of single-page applications (SPAs) with a
                highly responsive and engaging user experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={NodeJS}
              className="card-img-top custom-card-img"
              alt="NodeJS"
            />
            <div className="card-body">
              <h5 className="card-title">NodeJs</h5>
              <p className="card-text text-start">
                - Node.js is a server-side JavaScript runtime that allows
                developers to build server-side applications using JavaScript.
                <br />- In the context of the MERN stack, Node.js is used as the
                backend runtime to handle server-side logic, interact with the
                database (MongoDB), and server API endpoints to the frontend
                (React).
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">What is all this</h5>
            </div>
            <ul className="list-group list-group-flush text-start">
              <li className="list-group-item">
                - Express: To create a web server with Express.
              </li>
              <li className="list-group-item">
                - Mongoose: To interact with MongoDB.
              </li>
              <li className="list-group-item">
                - To parse JSON and URL-encoded data.
              </li>
              <li className="list-group-item">
                - To handle Cross-Origin Resource Sharing (CORS)
              </li>
              <li className="list-group-item">- Single Language: JavaScript</li>
              <li className="list-group-item">
                - Highly Responsive User Interfaces (ReactJS)
              </li>
              <li className="list-group-item">- NoSQL Database (MongoDB)</li>
              <li className="list-group-item">- Modern Development Tools</li>
              <li className="list-group-item">- Cross-Platform Development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
