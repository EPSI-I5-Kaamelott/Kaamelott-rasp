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
  if (songs.length !== 0) {
    const index = Random.integer(0,songs.length);
    return songs[index];
  }

  return null;
};

const play_sound = (sound) => {
  player.play(`${sounds_path}/${sound}.mp3`, err => {
    if(err) console.error(err);
  });
};

const play = (sounds) => {
  play_sound(get_random_sound(sounds)); 
};

module.exports = {
  connect: () => {
    
  },

  start: () => {
    play(sounds_start);
  },

  win: (winner, score) => {
    play(sounds_win);
  },

  winless: () => {
    play(sounds_winless);
  }
};
