import React from 'react';
import './App.css';

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

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

        <Route exact path="/api/products/:id/edit">
          <Update />
        </Route>

      </Switch>
    </div>
  );
}

export default App;