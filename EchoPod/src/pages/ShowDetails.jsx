import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import usePodcastStore from '../store/podcastStore';
import Loader from '../components/Loader';
import SeasonCard from '../components/SeasonCard';
import AudioPlayer from '../components/AudioPlayer';

const ShowDetails = () => {
  const { id } = useParams();
  const { fetchShowDetails, showDetails, isLoading, setCurrentAudio, addToFavourites, removeFromFavourites, favourites } = usePodcastStore();

  useEffect(() => {
    fetchShowDetails(id);
  }, [fetchShowDetails, id]);

  const isFavorited = favourites.some(fav => fav.id === showDetails.id);

  if (isLoading) return <Loader />;

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
