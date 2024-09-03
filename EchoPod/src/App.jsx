import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import Home from './pages/Home';
import ShowDetails from './pages/ShowDetails';
import SeasonDetails from './pages/SeasonDetails';
import Favourites from './pages/Favourites';
import Genres from './pages/Genres';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shows/:id" element={<ShowDetails />} />
            <Route path="/shows/:id/seasons/:seasonId" element={<SeasonDetails />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/genres" element={<Genres />} />
          </Routes>
        </main>
        <Footer />
        <AudioPlayer />
      </div>
    </Router>
  );
};

export default App;