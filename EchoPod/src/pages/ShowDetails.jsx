import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import usePodcastStore from '../store/podcastStore';
import Loader from '../components/Loader';
import SeasonCard from '../components/SeasonCard';
import AudioPlayer from '../components/AudioPlayer';

const ShowDetails = () => {
  const { id } = useParams();
  const { fetchShowDetails, showDetails, isLoading, setCurrentAudio, addToFavourites, removeFromFavourites, favourites } = usePodcastStore();
  const [error, setError] = useState(null);

  useEffect(() => {
    const getShowDetails = async () => {
      try {
        await fetchShowDetails(id);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch show details:", error);
        setError("Failed to load show details. Please try again later.");
      }
    };

    getShowDetails();
  }, [fetchShowDetails, id]);

  // Debugging: Inspect the showDetails object
  console.log("Show Details:", showDetails);

  // Show loading spinner while data is being fetched
  if (isLoading) return <Loader />;

  // Show error message if there's an error
  if (error) return <div className="error-message">{error}</div>;

  // Show fallback message if showDetails is empty
  if (!showDetails || Object.keys(showDetails).length === 0) {
    return <div className="error-message">No show details available.</div>;
  }

  // Check if the show is favorited
  const isFavorited = favourites.some(fav => fav.id === showDetails.id);

  return (
    <div className="show-details-page">
      <h2>{showDetails.title}</h2>
      <button onClick={() => setCurrentAudio(showDetails.audioUrl)}>Play Podcast</button>
      <button onClick={() => isFavorited ? removeFromFavourites(showDetails.id) : addToFavourites(showDetails)}>
        {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <AudioPlayer />
      <div className="seasons-list">
        {/* Add a fallback if seasons array is missing or empty */}
        {showDetails.seasons?.length > 0 ? (
          showDetails.seasons.map(season => (
            <SeasonCard key={season.id} season={season} />
          ))
        ) : (
          <p>No seasons available.</p>
        )}
      </div>
    </div>
  );
};

export default ShowDetails;
