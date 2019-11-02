import React from 'react';
import {
  Route,
  Router,
  Switch,
} from "react-router";
import './App.css';
import {ButtonsPage, HomePage} from "./pages";
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
        <Route path="/buttons" exact={true} component={ButtonsPage}/>
      </Switch>
    </Router>
  );
};

export default App;
