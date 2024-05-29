import "./App.css";
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReadPost from "./components/ReadPost";
import UpdatePost from "./components/UpdatePost";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create-post" element={<CreatePost />} />
          <Route exact path="/all-post" element={<ReadPost />} />
          <Route exact path="/:id" element={<UpdatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
