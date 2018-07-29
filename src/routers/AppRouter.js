import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "../components/Contact";
import Item from "../components/Item";
import Home from "../components/Home";
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import Portfolio from "../components/Portfolio";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/portfolio/:id" component={Item} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
