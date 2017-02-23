const fs = require('fs');

const scores_file = 'scores.json';

let players_scores = load_scores_from_file(scores_file) || {};

function increase_score(scores, winner, score) {
  let new_scores = Object.assign({}, scores);
  if(scores[winner]) {
    const old_score = scores[winner];
    new_scores[winner] = old_score + score;
  } else {
    new_scores[winner] = score;
  }
  return new_scores;
}

function persist_to_file(file, scores) {
  console.log('persist scores in file', file, '. Scores:', scores);
  fs.writeFile(file, JSON.stringify(scores, null, 4), err => {
    if(err) {
      console.log(err);
    } else {
      console.log(`JSON save to ${file}`);
    }
  });
}

function load_scores_from_file(file) {
  if(fs.existsSync(file)) {
    console.log('file found, load scores');
    return JSON.parse(fs.readFileSync(file));
  } else {
    console.log('file not found');
    return null;
  }
}

function update_score(winner, score) {
  players_scores = increase_score(players_scores, winner, score);
  persist_to_file(scores_file, players_scores);
}

function top_player() {
  let top_player, top_score = 0;
  
  for( player in players_scores ) {
    
    if(players_scores[player] > top_score) {
      top_score = players_scores[player];
      top_player = player+'->'+top_score+'pts';
    }
  }

  return top_player;
}

module.exports = { update_score, top_player };
