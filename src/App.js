import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<News key="general" pagesize={9} category={"general"} headline={"Top-Headline"}   />} />
            <Route exact path="/health" element={<News key="health" pagesize={9} category={"health"} headline={"Health"} />} />
            <Route exact path="/science" element={<News key="science" pagesize={9} category={"science"} headline={"Science"} />} />
            <Route exact path="/sports" element={<News key="sports" pagesize={9} category={"sports"} headline={"Sports"} />} />
            <Route exact path="/technology" element={<News key="technology" pagesize={9} category={"technology"} headline={"Technology"} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pagesize={9} category={"entertainment"} headline={"Entertainment"} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
