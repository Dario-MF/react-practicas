import React from 'react';
import Banner from './Banner';
import TravelCard from './TravelCard';
import Form from './Form';
import CardGrid from './CardGrid';
import Travel from "./Travel";
import MainMenu from './MainMenu'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const App =() => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component = { Banner } />
      <Route path="/viajes/:id" component = { Travel } />
      <Route path="/viajes" component = { CardGrid } />
      <Route path="/formulario" component = { Form } />
      <Route path="/history" component = { History } />
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
