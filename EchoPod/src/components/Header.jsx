
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Pods</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/genres">Genres</Link></li>
          <li><Link to="/favourites">Favourites</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;