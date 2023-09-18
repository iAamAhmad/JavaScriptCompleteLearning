const team = {
   _players: [
      {
         firstName: 'John',
         lastName: 'Doe',
         age: 25
      },
      {
         firstName: 'Jane',
         lastName: 'Smith',
         age: 28
      },
      {
         firstName: 'Mike',
         lastName: 'Johnson',
         age: 22
      }
   ],
   _games: [
      {
         opponent: 'Team A',
         teamPoints: 30,
         opponentPoints: 25
      },
      {
         opponent: 'Team B',
         teamPoints: 28,
         opponentPoints: 32
      },
      {
         opponent: 'Team C',
         teamPoints: 35,
         opponentPoints: 20
      }
   ],
   get players() {
      return this._players;
   },
   get games() {
      return this._games;
   },
   addPlayer(newFirstName, newLastName, newAge) {
      const newPlayer = {
         firstName: newFirstName,
         lastName: newLastName,
         age: newAge
      };
      this._players.push(newPlayer);
   },
   addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const newGame = {
         opponent: newOpponent,
         teamPoints: newTeamPoints,
         opponentPoints: newOpponentPoints
      };
      this._games.push(newGame);
   }
};

// Example usage of the addGame() method:
team.addGame('Team D', 40, 35);

// Log the updated _games property
console.log(team.games);
