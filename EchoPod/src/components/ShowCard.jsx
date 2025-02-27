import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import usePodcastStore from '../store/podcastStore';


const ShowCard = ({ show }) => {
  // Used the Zustand hook to access getGenreTitleById
  const { getGenreTitleById } = usePodcastStore();

  // Fallback image in case previewImage is missing
  const fallbackImage = 'https://via.placeholder.com/150';

  const formattedLastUpdated = show.lastUpdated
    ? new Date(show.lastUpdated).toLocaleDateString()
    : 'Date not available';

  return (
    <div className="show-card">
      <img
        src={show.previewImage || fallbackImage}
        alt={show.title}
        className="show-image"
      />
      <div className="show-details">
        <h3>{show.title}</h3>
        <p>
          Genres:{" "}S
          {/* Map genre IDs to their titles using getGenreTitleById */}
          {show.genres?.map((genreId) => getGenreTitleById(genreId)).join(", ") || "No genres available"}
        </p>
        <p>Seasons: {show.seasons?.length || 0}</p>
        <p>Last Updated: {formattedLastUpdated}</p>
        <Link to={`/shows/${show.id}`} className="details-link">
          View Details
        </Link>
      </div>
    </div>
  );
};


ShowCard.propTypes = {
  show: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    previewImage: PropTypes.string,
    lastUpdated: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    seasons: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default ShowCard;