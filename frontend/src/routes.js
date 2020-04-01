import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Register from './Pages/Register';
import Atividades from './Pages/Atividades';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/atividades" component={Atividades} />
      </Switch>
    </BrowserRouter>
  );
}