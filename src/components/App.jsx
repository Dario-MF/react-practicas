import React from 'react'
import Form from './pages/Form'
import Travel from "./pages/Travel"
import Travels from './pages/Travels'
import MainMenu from './organism/MainMenu'
import History from './pages/History'
import Home from './pages/Home'
import Users from './pages/Users'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'


const App = () => (
  <Provider store={store}>
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/viajes/:id" component={Travel} />
        <Route path="/viajes" component={Travels} />
        <Route path="/formulario" component={Form} />
        <Route path="/usuarios" component={Users} />
        <Route path="/history" component={History} />
        <Route component={() => (
          <>
            <h1>Error 404</h1>
            <span>página no encontrada</span>
          </>
        )} />
      </Switch>
    </Router>
  </Provider>

)







export default App;
