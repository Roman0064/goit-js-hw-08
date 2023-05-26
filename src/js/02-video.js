import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const saveCurrentTime = throttle((currentTime) => {
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime) {
  player.setCurrentTime(parseFloat(storedTime));
}

player.on('timeupdate', (data) => {
  const currentTime = data.seconds;
  saveCurrentTime(currentTime);
});