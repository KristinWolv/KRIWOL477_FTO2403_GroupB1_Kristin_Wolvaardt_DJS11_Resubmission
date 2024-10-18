import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

;

const ShowCard = ({ show }) => {
  return (
    <div className="show-card">
      <img src={show.previewImage} alt={show.title} className="show-image" />
      <div className="show-details">
        <h3>{show.title}</h3>
        <p>Genres: {show.genres.join(', ')}</p>
        <p>Seasons: {show.seasons.length}</p>
        <p>Last Updated: {new Date(show.lastUpdated).toLocaleDateString()}</p>
        <Link to={`/shows/${show.id}`} className="details-link">View Details</Link>
      </div>
    </div>
  );
};

ShowCard.propTypes = {
  show: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    lastUpdated: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    seasons: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};


export default ShowCard;