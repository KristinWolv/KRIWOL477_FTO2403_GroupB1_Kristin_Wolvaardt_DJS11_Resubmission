import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import usePodcastStore from '../store/podcastStore';
import EpisodeCard from '../components/EpisodeCard';
import Loader from '../components/Loader';

const SeasonDetails = () => {
  const { id, seasonId } = useParams();
  
  const { fetchSeasonDetails, seasonDetails, isLoading } = usePodcastStore();

  useEffect(() => {
    fetchSeasonDetails(id, seasonId);
  }, [fetchSeasonDetails, id, seasonId]);

  if (isLoading) return <Loader />;

  return (
    <div className="season-details-page">
      <h2>{seasonDetails.title}</h2>
      <div className="episodes-list">
        {seasonDetails.episodes.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default SeasonDetails;