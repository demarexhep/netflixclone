import React from "react";
import "./App.css";

import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchOriginals}
        isLargeRow
      />
      <Row title="Netflix Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Netflix Top Rated Movies" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Netflix Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Netflix Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Netflix Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Netflix Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="Netflix Documentary Movies"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
