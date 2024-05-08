import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [animeDetails, setAnimeDetails] = useState(null);

    useEffect(() => {
        const fetchAnimeDetails = async () => {
            try {
                const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                setAnimeDetails(data.data);
            } catch (error) {
                console.error('Error fetching anime details:', error);
            }
        };

        fetchAnimeDetails();
    }, [id]);

    if (!animeDetails) {
        return <div className='loading'>Loading...</div>;
    }
    
    return (
        <div className='detailsContainer'>
            <div className='animeimage'>
                <img src={animeDetails.images.jpg.large_image_url} alt={animeDetails.title} />    
            </div>
            <div className='animescore'>
                        <p className='scoretitle'>score:</p>
                        <p className='score'><strong>{animeDetails.score}</strong></p>
                    </div>
            <div className='animeInfo'>
                <div className='animeDetails'>
                    <div className='animetitle'>
                        <p><strong>{animeDetails.title}</strong></p>
                        <p className='entitle'><strong>{animeDetails.title_english}</strong></p>
                    </div>
                    <div className='otherinfo'>
                        <p className='othertitle'><strong>Information</strong></p>
                        <p><strong>Type: </strong>{animeDetails.type}</p>
                        <p><strong>Episode: </strong>{animeDetails.episodes}</p>
                        <p><strong>Status: </strong>{animeDetails.status}</p>
                        <p><strong>Genre: </strong>{animeDetails.genres.map(genre => genre.name).join(', ')}</p>
                        <p><strong>Themes: </strong>{animeDetails.themes.map(theme => theme.name).join(', ')}</p>
                        <p><strong>Duration: </strong>{animeDetails.duration}</p>
                    </div>
                    <div className='animesynp'>
                        <p className='syntitle'><strong>Synopsis</strong></p>
                        <p>{animeDetails.synopsis}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
