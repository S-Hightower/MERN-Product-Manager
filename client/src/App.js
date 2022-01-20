import React from 'react';
import './App.css';

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Form from './components/Form';
import ProductDisplay from './components/ProductDisplay';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <Form />
        </Route>

        <Route exact path="/api/products">
          <ProductDisplay />
        </Route>

      </Switch>
    </div>
  );
}

export default App;