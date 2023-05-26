import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player("vimeo-player");
const storageKey = 'videoplayer-current-time';

const saveTimeStorage = throttle((time) => {
    localStorage.setItem(storageKey, time.toString());
  }, 1000);

player.on('timeupdate', (event) => {
    const currentTime = event.seconds;
    localStorage.setItem(storageKey, currentTime.toString());
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTime = localStorage.getItem(storageKey);
    if (savedTime !== null) {
      const currentTime = parseFloat(savedTime);
      player.setCurrentTime(currentTime);
    }
});