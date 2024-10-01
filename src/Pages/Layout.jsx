import React from "react";
import "./Home.css";
import SearchResults from "./SearchResult";
//the main information and displaying the child => which is IndexComponent
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1 className="logo">sorana</h1>
        <p className="tagline">be the web. own the web.</p>
      </header>

      <div className="content">{children}</div>

      <footer>
        <p>&copy; 2024 sorana | the web is finally yours.</p>
      </footer>
      <h1>this is just for testing</h1>
      <SearchResults />
    </div>
  );
};

export default Layout;
