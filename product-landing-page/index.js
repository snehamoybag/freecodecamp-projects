const coverVideo = document.querySelector('#cover-video');
const videoBtn = document.querySelector('#video-btn');
const navbar = document.querySelector('#nav-bar');
let isPlaying = null;

// Play and Pause cover video
videoBtn.addEventListener('click', () => {
  if (!isPlaying) {
    playVideo();
  } else {
    pauseVideo();
  }
});

// play video and do stuffs function
function playVideo() {
  coverVideo.play();
  isPlaying = true;
  videoBtn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause Video`;
};

// pause video and do stuffs function
function pauseVideo() {
  coverVideo.pause();
  isPlaying = false;
  videoBtn.innerHTML = `<i class="fa-solid fa-play"></i> Resume Video`;
};


// Change navbar style on scroll
window.onscroll = function() {
  changeNavbarBg();
};

// change navbar background on srcoll function
function changeNavbarBg() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.classList.add('nav-bg-onscroll');
  } else {
    navbar.classList.remove('nav-bg-onscroll');
  }
};