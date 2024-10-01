import React from "react";
import { mockSearchResults } from "./mockSearchResults";
import "./SearchResults.css";
//on this code we just take the result and display them note this code only for testing
const SearchResults = () => {
  return (
    <main id="main_results">
      <nav id="links_on_top">
        <a href="/info/en/about" className="link_on_top_about">
          <span>About</span>
        </a>
        <a href="/preferences" className="link_on_top_preferences">
          <span>Preferences</span>
        </a>
      </nav>

      <form id="search" method="POST" action="/search" role="search">
        <div id="search_header">
          <a
            id="search_logo"
            href="/"
            tabIndex="0"
            title="Display the front page"
          >
            <span hidden>SearXNG</span>
            
          </a>
          <div id="search_view">
            <div className="search_box">
              <input
                id="q"
                name="q"
                type="text"
                placeholder="Search for..."
                tabIndex="1"
                autoComplete="off"
                autoCapitalize="none"
                spellCheck="false"
                autoCorrect="off"
                dir="auto"
                value="cats"
              />
              <button
                id="clear_search"
                type="reset"
                aria-label="clear"
                className="hide_if_nojs"
              >
                <span>clear</span>
              </button>
              <button
                id="send_search"
                type="submit"
                name="category_general"
                aria-label="search"
              >
                <span className="hide_if_nojs">search</span>
              </button>
            </div>
          </div>
          <div id="categories" className="search_categories">
           
          </div>
        </div>
      </form>

      <div id="results">
        {mockSearchResults.map((result, index) => (
          <div key={index} className="result">
            <div className="result-header">
              <a href={result.url} className="url_wrapper" rel="noreferrer">
                <span className="url_domain">{result.domain}</span>
                <span className="url_path">{result.path}</span>
              </a>
            </div>
            <h3>
              <a href={result.url} rel="noreferrer">
                {result.title}
              </a>
            </h3>
            <p className="content">{result.content}</p>
            <div className="result-footer">
              <span className="engine">{result.engine}</span>
              <a
                href={`https://web.archive.org/web/${result.url}`}
                className="cache_link"
                rel="noreferrer"
              >
                cached
              </a>
            </div>
          </div>
        ))}
      </div>

      <nav id="pagination" role="navigation">
        {/* Add pagination here */}
      </nav>
    </main>
  );
};

export default SearchResults;
