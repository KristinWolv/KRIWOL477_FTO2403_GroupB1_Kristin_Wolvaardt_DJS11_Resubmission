import { useEffect, useState } from 'react'; // Import useState
import { useParams } from 'react-router-dom';
import usePodcastStore from '../store/podcastStore';
import Loader from '../components/Loader';
import SeasonCard from '../components/SeasonCard';
import AudioPlayer from '../components/AudioPlayer';

const ShowDetails = () => {
  const { id } = useParams();
  const { fetchShowDetails, showDetails, isLoading, setCurrentAudio, addToFavourites, removeFromFavourites, favourites } = usePodcastStore();
  
  // Step 1: Add an error state
  const [error, setError] = useState(null);

  useEffect(() => {
    const getShowDetails = async () => {
      try {
        await fetchShowDetails(id);
        setError(null); // Reset error state on successful fetch
      } catch (error) {
        console.error("Failed to fetch show details:", error);
        setError("Failed to load show details. Please try again later."); // Set error message
      }
    };

    getShowDetails();
  }, [fetchShowDetails, id]);

  const isFavorited = favourites.some(fav => fav.id === showDetails.id);

  // Step 2: Handle loading and error states
  if (isLoading) return <Loader />;
  if (error) return <div className="error-message">{error}</div>; // Display error message

  return (
    <div className="show-details-page">
      <h2>{showDetails.title}</h2>
      <button onClick={() => setCurrentAudio(showDetails.audioUrl)}>Play Podcast</button>
      <button onClick={() => isFavorited ? removeFromFavourites(showDetails.id) : addToFavourites(showDetails)}>
        {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <AudioPlayer />
      <div className="seasons-list">
        {showDetails.seasons.map(season => (
          <SeasonCard key={season.id} season={season} />
        ))}
      </div>
    </div>
  );
};

export default ShowDetails;
