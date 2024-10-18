import { useEffect } from 'react';
import usePodcastStore from '../store/podcastStore';
import ShowCard from '../components/ShowCard';
import Loader from '../components/Loader';

const Home = () => {
  const { fetchShows, shows, isLoading } = usePodcastStore();

  useEffect(() => {
    fetchShows();
  }, [fetchShows]);

  if (isLoading) return <Loader />;

  return (
    <div className="home-page">
      <h2>Podcast Previews</h2>
      <div className="show-list">
        {shows.map(show => (
          <ShowCard key={Number(show.id)} show={{ ...show, id: Number(show.id) }}  />
        ))}
      </div>
    </div>
  );
};

export default Home;
