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
import Tag from "./pages/tag";
import Detail from "./pages/Detail";

function App() {
    return (
        <Router>

            <Switch>
                <Route path="/tags" exact>
                    <Tags/>
                </Route>
                <Route path="/tags/:id">
                    <Tag/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Route path="/detail">
                    <Detail/>
                </Route>
                <Route path="/" exact>
                    <Money/>
                </Route>
                <Route path="*" exact>
                    <NoMatch/>
                </Route>

            </Switch>

        </Router>
    );
}


export default App;
