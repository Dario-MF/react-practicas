import React from 'react';
import Parallax from './Parallax';
import Card from './card';
import Formulario from './Formulario';
import CardGrid from './cardGrid';
import Viaje from "./Viaje";
import MainMenu from './MainMenu'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const App =() => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component = { Parallax } />
      <Route path="/viajes/:id" component = { Viaje } />
      <Route path="/viajes" component = { CardGrid } />
      <Route path="/formulario" component = { Formulario } />
      <Route component = {()=>(
        <>
          <h1>Error 404</h1>
          <span>página no encontrada</span>
        </>
      )} />
    </Switch>  
  </Router>
)
  






export default App;
