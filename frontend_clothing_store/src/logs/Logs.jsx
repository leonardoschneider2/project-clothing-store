import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './logs_pages/Register';
import Login from './logs_pages/Login';

export default function Logs() {
  return (
    <>
      <Switch>
        <Route path="/logs/register" component={ Register } />
        <Route path="/logs/login" component={ Login } />
      </Switch>
      
    </>
  )
}
