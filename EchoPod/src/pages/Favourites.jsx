
import usePodcastStore from '../store/podcastStore';
import EpisodeCard from '../components/EpisodeCard';

const Favourites = () => {
  const { favourites } = usePodcastStore();

  return (
    <div className="favourites-page">
      <h2>Favourites</h2>
      <div className="favourites-list">
        {favourites.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;