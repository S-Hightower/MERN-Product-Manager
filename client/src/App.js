import React from 'react';
import './App.css';

import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;