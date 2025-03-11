import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import usePodcastStore from '../store/podcastStore';


const ShowCard = ({ show }) => {
  console.log("Show data in ShowCard:", show);
  // Used the Zustand hook to access getGenreTitleById
  const { getGenreTitleById } = usePodcastStore();

  return (
    <div className="show-card">
      <img
        src={show.image}
        alt={show.title}
        className="show-image"
      />
      <div className="show-details">
        <h3>{show.title}</h3>
        <p>
          Genres:{" "}
          {/* Map genre IDs to their titles using getGenreTitleById */}
          {show.genres?.map((genreId) => getGenreTitleById(genreId)).join(", ") || "No genres available"}
        </p>
        <p>Seasons: {show.seasons ? show.seasons : "No seasons available"}</p>
        <p>Last Updated: {new Date(show.updated).toDateString()}</p>
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
    image: PropTypes.string,
    updated: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    seasons: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default ShowCard;