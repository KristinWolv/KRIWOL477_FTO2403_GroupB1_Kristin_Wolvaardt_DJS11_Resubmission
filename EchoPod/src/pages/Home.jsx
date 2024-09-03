import { useEffect, useState } from 'react';
import usePodcastStore from '../store/podcastStore';
import ShowCard from '../components/ShowCard';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';

const Home = () => {
  const { shows, fetchShows, isLoading, genres, fetchGenres } = usePodcastStore();
  const [filteredShows, setFilteredShows] = useState(shows);

  useEffect(() => {
    fetchShows();
    fetchGenres();
  }, [fetchShows, fetchGenres]);

  const handleGenreSelect = (genre) => {
    if (genre) {
      setFilteredShows(shows.filter(show => show.genres.includes(genre.name)));
    } else {
      setFilteredShows(shows);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="home-page">
      <Sidebar genres={genres} onGenreSelect={handleGenreSelect} />
      <div className="show-list">
        {filteredShows.map(show => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default Home;