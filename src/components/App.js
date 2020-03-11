import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home'
// import Auth from './Auth'
import Login from './Login'
import Protected from './Protected'
import Authentificated from './Authentificated'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />

        <Authentificated>
          <Route path="/protected" component={Protected} />
        </Authentificated>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
