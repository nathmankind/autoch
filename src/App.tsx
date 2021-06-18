import React from "react";
import "./App.scss";
import { Layout } from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PermitPage from "./pages/PermitPage";
import SinglePermitPage from "./pages/SinglePermitPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={PermitPage} />
            <Route exact path="/permit/:id" component={SinglePermitPage} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
