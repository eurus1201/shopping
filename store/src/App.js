import React from 'react';
import './_styles/App.scss';
import { LoginPage,RegisterPage,MainPage, ProductPage } from "./_pages";
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import {PrivateRoute} from './_routes/privateRoute';
import {history} from './_helpers/history';
import { connect } from "react-redux";

function App ({user}) {
    return <Router history={history}>
      <Switch>
        <PrivateRoute path="/" isAuthenticated={!!user} exact component={MainPage}/>
        <Route path="/register" exact component={RegisterPage}/>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/product" exact component={ProductPage}/>
       
      </Switch>
    </Router>;
}

const mapStateToProps = state => {
  const {user} = state.authentication;
  return { user };
};

const ConnectedApp = connect(mapStateToProps)(App);

export default  ConnectedApp;
