import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header({ user }) {
  return (
    <div
      className="header w-100 p-4  d-flex align-items-center justify-content-between"
      style={{ backgroundColor: "#5CB3FF" }}
    >
      {user?.accessToken ? (
        <div>
          <Link to="/">
            <Button variant="secondary">Log Out</Button>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
      {!user?.accessToken ? (
        <div>
          <Link to="/signup" className="me-3">
            <Button variant="secondary">Sign Up</Button>
          </Link>
          <Link to="/signin">
            <Button variant="secondary">Sign In</Button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/dashboard">
            <Button variant="secondary">dashboard</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
