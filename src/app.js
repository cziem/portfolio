import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Navlink, Switch } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/style.scss";

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
    <h2>Dashboard</h2>
  </div>
);

const Routes = () => (
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

ReactDOM.render(<Routes />, document.getElementById("app"));
