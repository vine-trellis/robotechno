import React from 'react';
import './App.css';
import Notepicker from './pages/Notepicker';
import Home from './pages/Home';
import Join from './pages/Join';
import Listen from './pages/Listen';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/listen">
          <Listen />
        </Route>
        <Route path="/notepicker">
          <Notepicker />
        </Route>
        <Route path="/join">
          <Join />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
