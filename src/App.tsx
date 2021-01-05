import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Tags from "./pages/Tags";
import Statistics from "./pages/Statistics";
import Money from "./pages/Money";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
      <Router>

            <Switch>
              <Route path="/tags">
                <Tags />
              </Route>
              <Route path="/statistics">
                <Statistics />
              </Route>
              <Route path="/" exact>
                <Money />
              </Route>
              <Route path="*" exact>
                <NoMatch />
              </Route>

            </Switch>

      </Router>
  );
}


export default App;
