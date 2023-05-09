import React, { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../asset/crown.svg";
import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
           SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
           SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
