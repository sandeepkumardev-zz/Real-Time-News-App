import React, { useState } from "react";

function Type(props) {
  const [state, setstate] = useState("all");
  props.val(state);

  const all = () => {
    setstate(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=390558c1a73f41658abca138a20fdbac"
    );
  };
  const business = () => {
    setstate(
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=390558c1a73f41658abca138a20fdbac"
    );
  };
  const health = () => {
    setstate(
      "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=390558c1a73f41658abca138a20fdbac"
    );
  };
  const technology = () => {
    setstate(
      "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=390558c1a73f41658abca138a20fdbac"
    );
  };
  const entertainment = () => {
    setstate(
      "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=390558c1a73f41658abca138a20fdbac"
    );
  };
  const science = () => {
    setstate(
      "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=390558c1a73f41658abca138a20fdbac"
    );
  };
  const sports = () => {
    setstate(
      "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=390558c1a73f41658abca138a20fdbac"
    );
  };
  return (
    <div>
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav mx-2 d-flex justify-content-between">
          <a className="p-2 text-muted" onClick={all}>
            All
          </a>
          <a className="p-2 text-muted" onClick={business}>
            Business
          </a>
          <a className="p-2 text-muted" onClick={health}>
            Health
          </a>
          <a className="p-2 text-muted" onClick={technology}>
            Technology
          </a>
          <a className="p-2 text-muted" onClick={entertainment}>
            Entertainment
          </a>
          <a className="p-2 text-muted" onClick={science}>
            Science
          </a>
          <a className="p-2 text-muted" onClick={sports}>
            Sports
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Type;
