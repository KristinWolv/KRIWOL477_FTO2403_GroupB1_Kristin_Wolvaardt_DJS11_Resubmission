import { useState } from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ genres, onGenreSelect }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    onGenreSelect(genre);
  };

  return (
    <aside className="sidebar">
      <h3>Filter by Genre</h3>
      <ul>
        {genres.map((genre) => (
          <li
            key={genre.id}
            className={selectedGenre === genre ? 'selected' : ''}
            onClick={() => handleGenreClick(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

Sidebar.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,  
      name: PropTypes.string.isRequired,
    })
  ).isRequired,  
  onGenreSelect: PropTypes.func.isRequired,  
};

export default Sidebar;