import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Eat from "./components/Eat";
import Drink from "./components/Drink";
import ParamsExample from "./components/ParamsExample";



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
            <li>
              <Link to="/name">Instructors</Link>
            </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route exact path="/eat" component={Eat} />
        <Route path="/drink" component={Drink} />
        <Route path="/name" component={ParamsExample} />
  </div>
);


export default App;
