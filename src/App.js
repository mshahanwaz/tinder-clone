import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h2>chatpage</h2>
          </Route>
          <Route path="/">
            <h2>homepage</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
