import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { BigRedirectIcon } from "./navbar";

function Title(): JSX.Element {
  const titleTextStyle: React.CSSProperties = {
    marginTop: "10px",
    color: "var(--lightColor)",
  };
  const subtitleTextStyle: React.CSSProperties = {
    marginTop: "25px",
    marginBottom: "10px",
  };

  return (
    <>
      <BigRedirectIcon />
      <h1 style={titleTextStyle}>hanziKR Developer</h1>
      <h2 style={subtitleTextStyle}>👋Hello Everyone! I'm hanziKR Developer</h2>
    </>
  );
}
function Links(): JSX.Element {
  return (
    <div>
      <a className="lightFocus" href="https://github.com/hanziKR">
        Github
      </a>
      <Link className="lightFocus" to="/test">
        Test Page
      </Link>
    </div>
  );
}
function IndexPage() {
  return (
    <div className="container">
      <Title />
      <Links />
    </div>
  );
}

export default IndexPage;
