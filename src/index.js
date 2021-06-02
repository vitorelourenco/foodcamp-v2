import ReactDOM from "react-dom";
import React from "react";
import initialState from "./database/initialState";
import Home from "./switch_components/home/home";
import Header from "./global_components/header";
import Review from "./switch_components/review/review";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './css/reset.css';
import './css/styles.css';
require('dotenv').config()
const root = document.querySelector(".root");

function App() {
  const [orderState, setOrderState] = React.useState(initialState);
  console.log(process.env)
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home orderState={orderState} setOrderState={setOrderState} />
        </Route>
        <Route path="/revisar">
          <Review orderState={orderState} />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, root);
