import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import TablePage from "./pages/TablePage";
import React, { useState } from "react";
import Login from "./auth/Login";
import Register from "./auth/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Todos from "./pages/Todos";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { isAuthenticated } = useSelector((state) => state.users);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/table" element={<TablePage />} />
          <Route
            path="/todos"
            element={isAuthenticated ? <Todos /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Bottom /> */}
        {/* <Rate /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
