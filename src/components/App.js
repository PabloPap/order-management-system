import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import Header from './shared/Header';
import '../App.css';
import PageNotFound from './PageNotFound';
import OrdersPage from './orders/OrdersPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/orders" component={OrdersPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
