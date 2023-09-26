// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') 
with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. 
So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) 
and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, 
WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = [...players1, "Thiago", "Coutinho", "Peristic"];
console.log(players1Final, players1);
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const lowestOdds = (team1 < team2 && game.team1) || game.team2;
console.log(lowestOdds);

console.log(team1 < team2 && game.team1);
console.log(team1 > team2 && game.team2);

function printGoals(...players) {
  console.log(...players, players.length);
}
printGoals(...game.scored);

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
(We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, 
but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, 
don't hardcode them (except for "draw"). 

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, 
and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

for (const [goalNUm, playerScored] of game.scored.entries()) {
  console.log(`Goal ${goalNUm + 1}: ${playerScored}`);
}

let sumOfOdds = 0;
for (const odd of Object.values(game.odds)) sumOfOdds += odd;
console.log(sumOfOdds / Object.values(game.odds).length);

for (const [team, odds] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${game[team] ? `victory ${game[team]}: ${odds}` : `draw: ${odds}`}`
  );
}

const scored = game.scored;
const scoredObj = {};
for (const [x, playerScored] of scored.entries()) {
  scoredObj[playerScored] = 0;
  for (const player of scored) {
    if (player === playerScored) {
      scoredObj[playerScored] += 1;
    }
  }
}
console.log(scoredObj);

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  //console.log(scorers[player]) --> 1, 1, 2, 1
}
console.log(scorers);

// // Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" 
(keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const eventsArray = [];
for (const [, event] of gameEvents) {
  eventsArray.push(event);
}
const events = new Set(eventsArray);
console.log(events);
console.log(eventsArray);
gameEvents.delete(64);
console.log(gameEvents);

function getTimesBetweenEvents(eventMap) {
  const eventTimes = [0, ...eventMap.keys()];
  const timeBetweenEvents = [];
  for (let i = 1; i < eventTimes.length; i++) {
    timeBetweenEvents.push(eventTimes[i] - eventTimes[i - 1]);
  }
  return timeBetweenEvents;
}
function addUpAll(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
function calcAvgEventFrequency(eventMap) {
  const timeBetweenEvents = getTimesBetweenEvents(eventMap);
  const sumOfTimeBetweenEvents = addUpAll(timeBetweenEvents);
  const avgEventFrequency = sumOfTimeBetweenEvents / eventMap.size;
  return avgEventFrequency;
}
console.log(
  `An event happened, on average, every ${Math.round(
    calcAvgEventFrequency(gameEvents)
  )} minutes.`
);

function returnGameHalf(time) {
  return time < 45 ? `[FIRST HALF]` : `[SECOND HALF]`;
}
function logEvents(eventMap) {
  for (const [time, event] of eventMap) {
    console.log(`${returnGameHalf(time)} ${time}: ${event}`);
  }
}
logEvents(gameEvents)
