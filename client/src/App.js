import React from 'react';
import './App.css';

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <Main />
        </Route>
{/* 
        <Route exact path="/api/products">
          <ProductDetails />
        </Route> */}

      </Switch>
    </div>
  );
}

export default App;