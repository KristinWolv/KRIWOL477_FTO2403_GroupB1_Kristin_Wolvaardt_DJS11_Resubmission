
// Favourites.jsx

import usePodcastStore from '../store/podcastStore';
import EpisodeCard from '../components/EpisodeCard';
import Loader from '../components/Loader';

const Favourites = () => {
  const { favourites, isLoading, error } = usePodcastStore();

  if (isLoading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <div className="favourites-page">
      <h2>Favourites</h2>
      <div className="favourites -list">
        {favourites.length > 0 ? (
          favourites.map(episode => <EpisodeCard key={episode.id} episode={episode} />)
        ) : (
          <p>No favourites added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favourites;