import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="nav">
      <Link className="logo" to="/">
        ProfileBook
      </Link>
      <Link className="create" to="/create">
        Add Profiles
      </Link>
      <Link className="create" to="/edit">
        Edit Profiles
      </Link>
    </div>
  );
}
