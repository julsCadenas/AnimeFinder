import React from 'react';
import { Link } from 'react-router-dom';

const Body = ({ animeData, setShowBody }) => {
    
    if (animeData.length === 0) {
        return null;
    }

  return (
    <div className="animeList">
      {animeData.map((anime) => (
        <div key={anime.mal_id} className="animeItem">
          <Link to={`/details/${anime.mal_id}`} key={`link-${anime.mal_id}`} onClick={() => setShowBody(false)}>
            <div className="animeItem">
              <img src={anime.images.jpg.large_image_url} alt={anime.title} />
              <p>{anime.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Body;
