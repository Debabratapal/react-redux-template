import React from "react";
import Layout from "./components/layout/Layout";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./route";
import { NProgress } from "redux-nprogress";
import SnackBar from "./components/snack/SnackBar";

const App = () => (
  <Router>
    <Layout>
      <NProgress />
      <Switch>
        <Routes />
      </Switch>
      <SnackBar />
    </Layout>
  </Router>
);

export default App;
