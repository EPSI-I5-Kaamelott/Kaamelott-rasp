const fs = require('fs');

const scores_file = 'scores.json';

let players_scores = load_scores_from_file(file) || {};

function increase_score(scores, winner, score) {
  let new_scores = Object.assign({}, scores);
  if(scores[winner]) {
    const old_score = scores[winner];
    new_scores[winner] = old_score + score);
  } else {
    new_scores[winner] = score;
  }
  return new_scores;
}

function persist_to_file(file, scores) {
  fs.writeFile(file, JSON.stringify(scores, null, 4), err => {
    if(err) {
      console.log(err);
    } else {
      console.log(`JSON save to ${file}`);
    }
  });
}

function load_scores_from_file(file) {
  return require(file);
}

function update_score(winner, score) {
  players_scores = increase_score(players_scores, winner, score);
  persist_to_file(scores_file, player_score);
}

module.exports = { update_score };
