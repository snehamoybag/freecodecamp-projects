const coverVideo = document.querySelector('#cover-video');
const videoBtn = document.querySelector('#video-btn');
let isPlaying = null;

// Play and Pause cover video
videoBtn.addEventListener('click', () => {
  if (!isPlaying) {
    playVideo();
  } else {
    pauseVideo();
  }
});

// stuffs to do when video is playing
function playVideo() {
  coverVideo.play();
  isPlaying = true;
  videoBtn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause Video`;
};

// stuffs to do when video is paused
function pauseVideo() {
  coverVideo.pause();
  isPlaying = false;
  videoBtn.innerHTML = `<i class="fa-solid fa-play"></i> Resume Video`;
};