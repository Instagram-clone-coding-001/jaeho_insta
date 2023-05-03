import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./header/Header";
import Login from "./login/Login";
import Post from "./article/Post";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Header />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <Post />
    </Router>
  );
};

export default App;
