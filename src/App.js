import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import IndexPage from "./pages";
import CategoryPage from "./pages/category";
import InboxPage from "./pages/inbox";
import LoginPage from "./pages/login";
import ProductPage from "./pages/product";
import RegisterPage from "./pages/register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route path="/category/:name">
            <CategoryPage />
          </Route>
          <Route path="/inbox">
            <InboxPage />
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="*">
            <IndexPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
