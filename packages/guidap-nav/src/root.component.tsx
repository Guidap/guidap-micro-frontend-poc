import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function Root() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/login" className="link">
          Login
        </Link>
        &nbsp;
        <Link to="/" className="link">
          Home
        </Link>
      </nav>
    </BrowserRouter>
  );
}