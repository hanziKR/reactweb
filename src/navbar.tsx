import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function SmallRedirectIcon(): JSX.Element {
  return (
    <Link to="/">
      <img src={logo} width="40px" height="40px" alt="logo" />
    </Link>
  );
}
function BigRedirectIcon(): JSX.Element {
  return (
    <Link to="/">
      <img src={logo} width="120px" height="120px" alt="logo" />
    </Link>
  );
}

interface INavbarProps {
  title: string;
}
function Navbar(props: INavbarProps): JSX.Element {
  return (
    <header>
      <div className="navbar">
        <SmallRedirectIcon />
        <h3>{props.title}</h3>
      </div>
    </header>
  );
}

export { SmallRedirectIcon, BigRedirectIcon, Navbar };
