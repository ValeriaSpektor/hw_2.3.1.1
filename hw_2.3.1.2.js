//Тестовый набор данных:

const testPlayers = [
    {
      "id": 1,
      "name": "John",
      "scorePoints": 5000
    },
    {
      "id": 2,
      "name": "Alice",
      "scorePoints": 4200
    },
    {
      "id": 3,
      "name": "Bob",
      "scorePoints": 5500
    },
    {
      "id": 4,
      "name": "Eva",
      "scorePoints": 4900
    },
  ];
  

//Код для тестирования:
  
  const scoreArray = [];
  
  for (const player of testPlayers) {
    scoreArray.push(player.scorePoints);
  }
  
  const maxScore = Math.max(...scoreArray);
  
  for (const player of testPlayers) {
    if (player.scorePoints === maxScore) {
      console.log(player);
      break;
    }
  }

  //Result:id: 3, name: 'Bob', scorePoints: 5500 