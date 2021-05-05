import ReactDOM from 'react-dom';
import React from 'react';
import initialState from './database/initialState';
import Home from './home';
import Header from './header';

const root = document.querySelector('.root');

function App(){
  const [orderState, setOrderState] = React.useState(initialState);

  return (      
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home orderState={orderState} setOrderState={setOrderState}/>
        </Route>
        <Route path="/revisar">
          <h1>oioioi</h1>
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, root);
