import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q, max = 5) => {
 
  //TODO:  Write an asynchronous action to handle a video search!
  
  return (dispatch)=> {
    
    searchYouTube({key: YOUTUBE_API_KEY, q: q, maxResults: max}, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    })

  }
}

export default handleVideoSearch;
