import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const Lazy = lazy(() => import(/* webpackChunkName: "lazy" */ './pages/Lazy'));

export default function App() {
  return (
    <BrowserRouter>
      <NavLink to="/home">home</NavLink>
      &nbsp;
      <NavLink to="/about">about</NavLink>
      &nbsp;
      <NavLink to="/lazy">lazy</NavLink>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
          <Route path="/lazy" component={Lazy} />
          <Redirect to="/home" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
