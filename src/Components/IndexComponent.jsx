import React, { useState } from "react";
import "./IndexComponent.css"; // Import your CSS file here

const IndexComponent = ({ messages, tokens }) => {
  const [query, setQuery] = useState("");
  const [username, setUsername] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState(""); // State for welcome message

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // i will call the api from here
    console.log("Search query:", query);
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    // Update welcome message with the new username
    setWelcomeMessage(`Welcome, ${username}!`);
  };

  return (
    <div className="index-container">
      <div className="intro-text">
        <h1>Say hi to Sorana</h1>
      </div>

      {/* Display welcome message if available */}
      {welcomeMessage && (
        <div className="welcome-message">
          <p>{welcomeMessage}</p>
        </div>
      )}

      <div className="search-box">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            name="query"
            placeholder="Search the web..."
            className="search-input"
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>

      <div className="user-box">
        <form onSubmit={handleUsernameSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className="user-input"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit" className="user-btn">
            Set New Username
          </button>
        </form>
      </div>
      <div className="tokens-box">
        <p>
          Your tokens: <span>{tokens}</span>
        </p>
      </div>
    </div>
  );
};

export default IndexComponent;
