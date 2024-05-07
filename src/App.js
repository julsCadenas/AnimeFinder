import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Details from './components/details';
import Body from './components/body';
import './styles/App.css';

function App() {
  const [search, setSearch] = useState('');
  const [animeData, setAnimeData] = useState([]);
  const [showBody, setShowBody] = useState(false); 

  const handleSearch = async (event) => {
    event.preventDefault();
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`);
    const resData = await res.json();
    setAnimeData(resData.data);
    setShowBody(true); 
  };

  return (
    <Router>
      <div>
        <Header search={search} setSearch={setSearch} handleSearch={handleSearch} />
        <div className="bodycontainer">
          <form className="searchbar" onSubmit={handleSearch}>
            <input
              className="inputsearch"
              placeholder="Find your Anime"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onMouseEnter={() => setShowBody(true)} 
              onMouseLeave={() => setShowBody(false)}
            />
            <button type="submit" className="searchBtn">
              <span className="material-symbols-outlined">
                <strong>Search</strong>
              </span>
            </button>
          </form>
          <div className={`bodyContainer ${showBody ? 'active' : ''}`} onMouseEnter={() => setShowBody(true)} onMouseLeave={() => setShowBody(false)}>
            {showBody && <Body animeData={animeData} setShowBody={setShowBody} />} 
          </div>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
