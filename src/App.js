import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './containers/homepage/HomePage';
import ShopPage from './containers/shop page/shoppage';
import Header from './components/header/header';
import SignInAndSignUpPage from './containers/sign-in-and-sign-up/sign-in-and-sign-up';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />

      </Switch>
    </div>
  );
}

export default App;
