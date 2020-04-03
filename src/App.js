import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/nav";
import Card from "./components/card";
import Type from "./components/type";

function App() {
  const [news, setnews] = useState([]);
  const [cat, setcat] = useState(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=390558c1a73f41658abca138a20fdbac"
  );

  const value = link => {
    setcat(link);
  };

  useEffect(() => {
    fetch(`${cat}`)
      .then(res => res.json())
      .then(data => setnews(data.articles));
  }, [cat]);

  return (
    <main role="main">
      <Nav />
      <div className="album py-2 bg-light">
        <Type val={value} />
        <div className="container">
          <div className="row">
            {news.map((item, index) => (
              <Card
                key={index}
                img={item.urlToImage}
                title={item.title}
                desc={item.description}
                url={item.url}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
