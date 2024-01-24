'use strict';
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    
   
    }
  
    //1


    for(const [goal,name] of (game.scored).entries())
    {
      console.log(`Goal ${goal+1}:${name}`);
    }

    //2
    let sum=0;
    let avg;
  for(const od of Object.values(game.odds))
  {
   
   sum=sum+od;
   avg=sum/3;
   
    
  }console.log(avg);

  //3

  console.log(`Odd of victory ${game?.team1??"not available"}:${game.odds.team1}`);

  console.log(`Odd of draw:${game.odds.x}`);
  console.log(`Odd of victory ${game?.team2??"not available"}:${game.odds.team2}`);


  //4

  const scorers={
    [game.scored[0]]:2,
    [game.scored[1]]:1,
    
    [game.scored[3]]:1,
   
  }
  console.log(scorers)
  
