import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from '../../global-styles';
import HomePage from '../HomePage/HomePage';


export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
