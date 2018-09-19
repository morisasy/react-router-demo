import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

const Eat = props => (
  <div>
    <h1>NOM NOM NOM</h1>
    <pre>{JSON.stringify(props, null, 4)}</pre>
    <iframe
      src="https://giphy.com/embed/VvQvOFqPjZLi"
      width="480"
      height="480"
    />
    <p>So tasty!</p>
  </div>
);

export default Eat;
