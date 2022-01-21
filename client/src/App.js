import React from 'react';
import './App.css';

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Main from './views/Main';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/api/products/:id">
          <Detail />
        </Route>

      </Switch>
    </div>
  );
}

export default App;