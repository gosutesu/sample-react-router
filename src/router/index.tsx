import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Top from '../component/pages/Top';
import Page1 from '../component/pages/Page1';
import Page2 from '../component/pages/Page2';

const Router : React.FC= ()=> {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Top} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;