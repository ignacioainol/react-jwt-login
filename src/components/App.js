import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home'
// import Auth from './Auth'
import Login from './Login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
