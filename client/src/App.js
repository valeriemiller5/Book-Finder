import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";


const App = () => (
  <Router>
    <div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Search} />
          <Route exact path="/saved/:id" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>
);

export default App;
