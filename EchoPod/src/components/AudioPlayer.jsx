import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import usePodcastStore from '../store/podcastStore'

const AudioPlayer = () => {
  const { currentAudio, setCurrentAudio } = usePodcastStore();  

  return (
    <ReactAudioPlayer
      src={currentAudio}
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
