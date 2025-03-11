import PropTypes from 'prop-types';
import EpisodeCard from './EpisodeCard';

const SeasonCard = ({ season, onClick }) => {
  return (
    <div className="season-card" onClick={() => onClick(season.id)}>
      <img src={season.previewImage} alt={season.title} className="season-image" />
      <div className="season-details">
        <h4>{season.title}</h4>
        <p>Episodes: {season.episodes.length}</p>
        {season.episodes.map((episode) =>{  return <EpisodeCard episode={episode} key={episode.id} />; })}
      </div>
    </div>
  );
};

SeasonCard.propTypes = {
  season: PropTypes.shape({
    title: PropTypes.string.isRequired,
    episodeCount: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    episodes: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SeasonCard;