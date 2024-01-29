const testPlayers = [
    { "id": 1, "name": "John", "scorePoints": 5000 },
    { "id": 2, "name": "Alice", "scorePoints": 4200 },
    { "id": 3, "name": "Bob", "scorePoints": 5500 },
    { "id": 4, "name": "Eva", "scorePoints": 4900 },
    { "id": 5, "name": "", "scorePoints": 6000 }, // Empty name
    { "id": 6, "name": "Charlie", "scorePoints": "" }, // Empty scorePoints
    { "id": 7, "name": "David", "scorePoints": "invalid" }, // Invalid scorePoints
    { "id": 8, "name": "Eve!", "scorePoints": 5300 }, // Special characters in name
    { "id": 9, "name": null, "scorePoints": 5100 }, // Null name
    { "id": 10, "name": "Frank", "scorePoints": undefined }, // Undefined scorePoints
    { "id": 11, "name": "Grace", "scorePoints": "3000" }, // String scorePoints
    { "id": 12, "name": "Hank", "scorePoints": null }, // Null scorePoints
  ];
  
  const scoreArray = [];
  
  for (const player of testPlayers) {
    scoreArray.push(Number(player.scorePoints) || 0); // Convert scorePoints to number or default to 0
  }
  
  const maxScore = Math.max(...scoreArray);
  
  for (const player of testPlayers) {
    if (Number(player.scorePoints) === maxScore) {
      console.log(player);
      break;
    }
  }