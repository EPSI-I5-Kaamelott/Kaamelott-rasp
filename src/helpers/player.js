const spawn = require('child_process').spawn;
const player = require('play-sound')( opts = {} );
const Random = require('random-js');

const sounds_path = './node_modules/kaamelott-soundboard'; 

const sound_connect = [];
const sounds_start = [
    'en_garde_espece_de_vieille_pute_degarnie',
    'en_garde_ma_mignone',
];
const sounds_win = [
    'putain_il_est_fort_ce_con',
    'wooouuuhouhouhou_c_est_mortel'
];
const sounds_winless = [
    'petite_pucelle',
    'sortez-est_vous_les_doigts_du_cul'
];

const get_random_sound = (songs = []) => {
  console.log('sound list', songs);
  if (songs.length !== 0) {
    const song_selected = songs[Math.floor(Math.random() * songs.length)];
    console.log('song selected', song_selected);
    return song_selected;
  }

  return null;
};

const play_sound = (sound) => {
  console.log('playing', sound);
  spawn('mpg123', [`${sounds_path}/${sound}.mp3`]);
};

const play = (sounds) => {
  console.log('trying to play a sound');
  play_sound(get_random_sound(sounds)); 
};

module.exports = {
  connect: () => {
    
  },

  start: () => {
    console.log('player called');
    play(sounds_start);
  },

  win: () => {
    console.log('player called');
    play(sounds_win);
  },

  winless: () => {
    play(sounds_winless);
  }
};
