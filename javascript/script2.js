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
};

const players1 = game.players[0];
const players2 = game.players[1];

console.log(players1);
console.log(players2);

const gk = players1[0];
const fieldPlayers = players1.slice(1);

console.log(gk);
console.log(fieldPlayers);


const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x, team2 } = game.odds;

const printGoals = (...playersName) => {
    for (let player of playersName) {
        console.log(player);
    }
}

printGoals(...game.scored);


game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}\n`);
});

const oddsArray = [team1, x, team2];
let sum = 0;
for (let i = 0; i < oddsArray.length; i++) {
    sum += oddsArray[i];
}
const averageOdd = sum / oddsArray.length;
console.log(averageOdd.toFixed(2));
