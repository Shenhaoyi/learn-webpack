import React from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <NavLink to="/home">home</NavLink>
      &nbsp;
      <NavLink to="/about">about</NavLink>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}
