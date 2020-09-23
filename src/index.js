import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from './App.jsx';
import {CountryProvider} from './components/Context/CountryContext.jsx';
import * as serviceWorker from './serviceWorker';
import CountryData from './components/CountryData/CountryData.jsx';

ReactDOM.render(
  <React.StrictMode>
    <CountryProvider>
      <BrowserRouter>
        <Switch>
          <Route component={CountryData} path='/code/:id'/>
          <Route component={App} path='/'/>
        </Switch>
      </BrowserRouter>
    </CountryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
