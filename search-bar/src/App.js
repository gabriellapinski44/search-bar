import React from "react";
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";
import './App.css';

function App() {
  return (
    <div className="App">
          <SearchBar placeholder="Podaj tytuł.." data={BookData}/>
    </div>
  );
}

export default App;