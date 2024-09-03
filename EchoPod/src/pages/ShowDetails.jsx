import { useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import usePodcastStore from '../store/podcastStore';
import SeasonCard from '../components/SeasonCard';
import Loader from '../components/Loader';

const ShowDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchShowDetails, showDetails, isLoading } = usePodcastStore();

  useEffect(() => {
    fetchShowDetails(id);
  }, [fetchShowDetails, id]);

  const handleSeasonClick = (seasonId) => {
    navigate(`/shows/${id}/seasons/${seasonId}`);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="show-details-page">
      <h2>{showDetails.title}</h2>
      <div className="seasons-list">
        {showDetails.seasons.map(season => (
          <SeasonCard key={season.id} season={season} onClick={handleSeasonClick} />
        ))}
      </div>
    </div>
  );
};

export default ShowDetails;