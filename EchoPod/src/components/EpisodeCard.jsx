import PropTypes from 'prop-types';
import usePodcastStore from '../store/podcastStore';


const EpisodeCard = ({ episode }) => {
  const { addToFavourites, removeFromFavourites, setCurrentAudio } = usePodcastStore();

  const handlePlay = () => {
    console.log("Playing episode:", episode.audioUrl);
    setCurrentAudio(episode.audioUrl);
  };

  const handleFavourite = () => {
    if (episode.isFavourite) {
      removeFromFavourites(episode.id);
    } else {
      addToFavourites(episode);
    }
  };

  return (
    <div className="episode-card">
      <h5>{episode.title}</h5>
      <div className="button-container">
        <button className="play-button" onClick={handlePlay}>
          Play
        </button>
        <button className="favorite-button" onClick={handleFavourite}>
          {episode.isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
        </button>
      </div>
      <p>{new Date(episode.dateAdded).toLocaleDateString()}</p>
    </div>
  );
};

// Define PropTypes 
EpisodeCard.propTypes = {
  episode: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    audioUrl: PropTypes.string.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    dateAdded: PropTypes.string.isRequired,
  }).isRequired,
};

export default EpisodeCard;