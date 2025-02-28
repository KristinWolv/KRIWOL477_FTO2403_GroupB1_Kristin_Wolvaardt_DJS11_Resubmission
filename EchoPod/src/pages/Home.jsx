import { useEffect } from 'react';
import usePodcastStore from '../store/podcastStore';
import ShowCard from '../components/ShowCard';
import Loader from '../components/Loader';

const Home = () => {
  const { fetchShows, shows, isLoading } = usePodcastStore();

   // Sort shows alphabetically by title
   const sortedShows = shows.sort((a, b) => a.title.localeCompare(b.title));


  useEffect(() => {
    fetchShows();
  }, [fetchShows]);

  if (isLoading) return <Loader />;

  return (
    <div className="main-content">
      <h1>Podcast Shows</h1>
      <div className="show-list">
        {sortedShows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default Home;
