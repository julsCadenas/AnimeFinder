import React, { useState } from 'react';

const Body = () => {
    const [search, setSearch] = useState('');
    const [animeData, setAnimeData] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`);
        const resData = await res.json();
        setAnimeData(resData.data);
    }

    return (    
        <div className="bodycontainer">
            <form className="searchbar" onSubmit={handleSearch}>
                <input
                    className="inputsearch"
                    placeholder='Find your Anime'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="searchBtn">
                    <span className="material-symbols-outlined">
                        <strong>Search</strong>
                    </span>
                </button>
            </form>
            {animeData.length > 0 && (
                <div className="animeList">
                    {animeData.map(anime => (
                        <div key={anime.id} className="animeItem">
                            <img src={anime.images.jpg.large_image_url} alt={anime.title} />
                            <p>{anime.title}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Body;
