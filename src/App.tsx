import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Layout from "./component/Layout";
import Birds from "./component/Birds";
import BirdDetails from "./component/BirdDetails";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/birds" Component={Birds} />
          <Route path="/birds/:id" Component={BirdDetails} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
