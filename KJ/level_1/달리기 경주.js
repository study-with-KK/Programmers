// function solution(players, callings) {
//   // const answer = [];

//   // const playersOrder = new Map();
//   // const orderPlayers = new Map();

//   // // 선수이름 : '등수'
//   // players.forEach((player, i) => {
//   //   playersOrder.set(player, i);
//   // });

//   // // 등수 : '선수이름'
//   // players.forEach((player, i) => {
//   //   orderPlayers.set(i, player);
//   // });

//   // for (let i = 0; i < callings.length; i++) {
//   //   const calledPlayer = callings.at(i);
//   //   const calledPlayerOrder = playersOrder.get(calledPlayer);
//   //   const overTakenPlayer = orderPlayers.get(calledPlayerOrder - 1);
//   //   const overTakenPlayerOrder = playersOrder.get(overTakenPlayer);

//   //   playersOrder.set(calledPlayer, calledPlayerOrder - 1).set(overTakenPlayer, overTakenPlayerOrder + 1);
//   //   orderPlayers.set(calledPlayerOrder - 1, calledPlayer).set(overTakenPlayerOrder + 1, overTakenPlayer);
//   // }

//   // for (const order of orderPlayers.values()) {
//   //   answer.push(order);
//   // }

//   // return answer;

//   let index;
//   let calledPlayer;
//   let overTakenPlayer;

//   const orderPlayer = {};

//   players.forEach((player, i) => {
//     orderPlayer[player] = i;
//   });

//   for (const call of callings) {
//     index = orderPlayer[call];
//     calledPlayer = players[index];
//     overTakenPlayer = players[index - 1];
//     orderPlayer[call] -= 1;
//     orderPlayer[overTakenPlayer] += 1;
//     players[index] = overTakenPlayer;
//     players[index - 1] = calledPlayer;
//   }

//   return players;
// }

const players = ['mumu', 'soe', 'poe', 'kai', 'mine'];
const callings = ['kai', 'kai', 'mine', 'mine'];

let index;
let calledPlayer;
let overTakenPlayer;

const orderPlayer = {};

players.forEach((player, i) => {
  orderPlayer[player] = i;
});

for (const call of callings) {
  index = orderPlayer[call];
  calledPlayer = players[index];
  overTakenPlayer = players[index - 1];
  orderPlayer[call] -= 1;
  orderPlayer[overTakenPlayer] += 1;
  players[index] = overTakenPlayer;
  players[index - 1] = calledPlayer;
}

console.log(players);
