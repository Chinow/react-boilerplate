import React from 'react';
import {
  Route,
  Router,
  Switch,
} from "react-router";
import './App.css';
import { HomePage } from "./pages";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

type AppProps = {
  // Nothing here;
}

const App: React.FC<AppProps> = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact={true} component={HomePage}/>
      </Switch>
    </Router>
  );
};

export default App;
