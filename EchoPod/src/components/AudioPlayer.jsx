import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import usePodcastStore from '../store/podcastStore'

// Placeholder audio URL
const PLACEHOLDER_AUDIO_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'; //generic free mp3 found online

const AudioPlayer = () => {
  const { currentAudio, setCurrentAudio } = usePodcastStore(); 
  
  console.log("Current Audio URL:", currentAudio);

  return (
    <ReactAudioPlayer
      src={currentAudio || PLACEHOLDER_AUDIO_URL} // uses placeholder if no audio is selected
      onEnded={() => setCurrentAudio(null)}
      controls
      autoPlay
      style={{ position: 'fixed', bottom: 0, width: '100%' }}
    />
  );
};

AudioPlayer.propTypes = {
  audioUrl: PropTypes.string,
  isPlaying: PropTypes.bool,
};

export default AudioPlayer;
