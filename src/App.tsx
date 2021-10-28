import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from "./views/Home";
import {Provider} from "./contexts/AppContext";
import {LaunchDetail} from "./views/Detail/Launch/LaunchDetail";
import {RocketDetail} from "./views/Detail/Rocket/RocketDetail";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Provider>
          <Route path="/launch/:id" exact>
           <LaunchDetail/>
          </Route>
          <Route path="/rocket/:id" exact>
           <RocketDetail/>
          </Route>
          <Route path="/" exact>
            <Home/>
          </Route>
          </Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
