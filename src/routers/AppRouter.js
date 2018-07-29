import React from "react";
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";

const ExpenseDashboardPage = () => (
  <div>This is coming from dashboard component</div>
);

const AddExpensePage = () => <div>Add some expenses here</div>;

const EditPageExpensePage = () => <div>This is the edit page!</div>;

const helpPage = () => <div>This is the help page</div>;

const NotFound = () => (
  <div>
    404 page not found! <Link to="/">Home</Link>
  </div>
);

const Header = () => (
  <div>
    <h2>Expensify</h2>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </div>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditPageExpensePage} />
        <Route path="/help" component={helpPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
