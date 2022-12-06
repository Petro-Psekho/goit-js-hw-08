import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Vimeo(iframe);

player.on(
  'play',
  throttle(function setCurrentTime(e) {
    console.log(e);
    console.log(e.seconds);
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const video = document.querySelector('#vimeo-player');

// const player = new Player(video);

// player.on(
//   'timeupdate',
//   throttle(function playTime(e) {
//     localStorage.setItem('vid-time', e.seconds);
//   }, 1000)
// );

// player.setCurrentTime(localStorage.getItem('vid-time'));
