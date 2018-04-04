import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStateToProp = (state) => {

  return {
    video: state.currentVideo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeVideoPlayer: (video)=> dispatch(changeVideo(video))
  }
}

var VideoPlayerContainer = connect(mapStateToProp, mapDispatchToProps)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
