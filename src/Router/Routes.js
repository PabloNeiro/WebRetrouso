import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from '../components/Admin/Admin';
import Calendar from '../components/Calendario/Calendar';
import Contact from '../components/Contacto/Contact';
import Discs from '../components/Discos/Discs';
import School from '../components/Escola/School';
import Fervenza from '../components/Fervenza/Fervenza';
import Gallery from '../components/Galeria/Gallery';
import Home from '../components/Home/Home';
import Invernia from '../components/Invernia/Invernia';

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/Galeria'>
        <Gallery />
      </Route>
      <Route exact path='/Discography'>
        <Discs />
      </Route>
      <Route exact path='/A-Fervenza-de-Ouzande'>
        <Fervenza />
      </Route>
      <Route exact path='/Essays'>
        <School />
      </Route>
      <Route exact path='/Invernia'>
        <Invernia />
      </Route>
      <Route exact path='/Calendar'>
        <Calendar />
      </Route>
      <Route exact path='/Contact'>
        <Contact />
      </Route>
      <Route exact path='/Admin'>
        <Admin />
      </Route>
    </Switch>
  );
}
export default Routes;
