import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Eat from "./components/Eat";
import Drink from "./components/Drink";



const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/eat">Eat</Link>
      </li>
      <li>
        <Link to="/drink">Drink</Link>
      </li>
    </ul>
    <Route exact path="/" component={Home} />
    <Route path="/eat" component={Eat} />
    <Route path="/drink" component={Drink} />
  </div>
);


export default App;
