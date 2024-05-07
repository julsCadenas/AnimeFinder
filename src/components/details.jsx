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
            <div className='specificinfo'>
                <img className='yeimage' src={animeDetails.images.jpg.large_image_url} alt={animeDetails.title} />    
                <p className='animetitleye'>{animeDetails.title}</p>
                <p className='animetitleye'>{animeDetails.synopsis}</p>
            </div>
        </div>

    );
};

export default Details;
