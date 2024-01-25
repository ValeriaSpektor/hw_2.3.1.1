const players = [
    {
    "id": 1,
    "name": "Ivan",
    "scorePoints": 4500
    },
    {
    "id": 2,
    "name": "Petr",
    "scorePoints": 3600
    },
    {
    "id": 3,
    "name": "Vadim",
    "scorePoints": 3433
    },
    {
    "id": 4,
    "name": "Olga",
    "scorePoints": 2356
    },
    
    ];


let scoreArray = [];
for (let player of players) {
    scoreArray.push(player.scorePoints);
}

let maxScore = Math.max(...scoreArray);

let playerWithMaxScore;
for (let player of players) {
    if (player.scorePoints === maxScore) {
        playerWithMaxScore = player;
        break;
    }
}

console.log(playerWithMaxScore);
