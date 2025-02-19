import { useEffect } from 'react';
import usePodcastStore from '../store/podcastStore';
import ShowCard from '../components/ShowCard';
import Loader from '../components/Loader';

const Genres = () => {
  const { genres, shows, fetchGenres, fetchShowsByGenre, isLoading, getGenreTitleById } = usePodcastStore();

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  const handleGenreClick = (genre) => {
    fetchShowsByGenre(genre.id);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="genres-page">
      <h2>Genres</h2>
      <div className="genres-list">
        {genres.length === 0 ? (
          <div>No genres available.</div>
        ) : (
          genres.map(genre => (
            <button key={genre.id} onClick={() => handleGenreClick(genre)}>
              {getGenreTitleById(genre.id)}
            </button>
          ))
        )}
      </div>
      <div className="show-list">
        {shows.length === 0 ? (
          <div>No shows available for this genre.</div>
        ) : (
          shows.map(show => (
            <ShowCard key={show.id} show={show} />
          ))
        )}
      </div>
    </div>
  );
};

export default Genres;

