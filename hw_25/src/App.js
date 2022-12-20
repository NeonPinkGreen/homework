import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./css/style.sass";
import { Account } from "./pages/account";
import { Index } from "./pages/index";
import { Login } from "./pages/login";
import { ShoppingCart } from "./pages/shoppingCart";
import data from "./data/products.json";

import Header from "./components/Header";

const App = () => {
  return (
    <Fragment>
      <Header></Header>
      <Routes>
        <Route path="/index.html" element={<Index products={data} />}></Route>
        <Route path="/account.html" element={<Account />}></Route>
        <Route path="/login.html" element={<Login />}></Route>
        <Route path="/shoppingCart.html" element={<ShoppingCart />}></Route>
        <Route path="/" element={<Index products={data} />}></Route>
      </Routes>
    </Fragment>
  );
};

export default App;
