import ReactDOM from 'react-dom';
import React from 'react';
import initialState from './database/initialState';
import Home from './home';
import Header from './header';
import Review from './review';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const root = document.querySelector('.root');

function App(){
  const [orderState, setOrderState] = React.useState(initialState);

  return (      
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home orderState={orderState} setOrderState={setOrderState}/>
        </Route>
        <Route path="/revisar">
          <Review orderState={orderState}/>
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, root);
