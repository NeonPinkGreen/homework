import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <div className="header__container">
            <a href="index.html">
              <img src="images/logo.png" alt="logo" height="45" />
            </a>
            <div className="header__info">
              Hi,
              <a href="login.html" className="header__user" id="headerUser">
                Log in
              </a>
              <div className="header__shop">
                <a href="shoppingCart.html" id="headerShoppingCart">
                  <img
                    src="images/shopping-cart.png"
                    alt="shopping cart"
                    height="20"
                  />
                  <span
                    className="header__shop--count"
                    id="headerShoppingCartCount"
                  >
                    0
                  </span>
                </a>
              </div>
              <button className="header__logout" id="headerLogout">
                Log out
              </button>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
