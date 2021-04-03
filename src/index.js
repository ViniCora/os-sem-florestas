import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LuisGarcia from './PersonagensPaginas/LuisGarcia';
import AalikMattaaq from './PersonagensPaginas/AalikMattaq';
import Violetta from './PersonagensPaginas/Violetta';
import Aaron from './PersonagensPaginas/Aaron';
import Ewan from './PersonagensPaginas/Ewan';
import Danyel from './PersonagensPaginas/Danyel';
import MorganaHela from './PersonagensPaginas/MorganaHela';
import Ibrahim from './PersonagensPaginas/Ibrahim';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={App} exact />
    <Route path="/personagens/LuisGarcia" component={LuisGarcia} />
    <Route path="/personagens/AalikMattaaq" component={AalikMattaaq} />
    <Route path="/personagens/Violetta" component={Violetta} />
    <Route path="/personagens/Aaron" component={Aaron} />
    <Route path="/personagens/Ewan" component={Ewan} />
    <Route path="/personagens/Danyel" component={Danyel} />
    <Route path="/personagens/Ibrahim" component={Ibrahim} />
    <Route path="/personagens/MorganaHela" component={MorganaHela} />
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

