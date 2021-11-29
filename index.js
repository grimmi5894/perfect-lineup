// 1) The total salary of all players in a lineup may not exceed $45,000
const calculateTotalSalary = (lineup) => {
  return lineup.reduce((salary, player) => {
    return salary + player.salary
  }, 0)
}
// 2) Lineups may not contain more than 2 players from a single team
const getTeamCount = (lineup) => {
  return lineup.reduce((teamCounts, player) => {
    teamCounts[player.teamId] = teamCounts[player.teamId] === undefined ? 1 : teamCounts[player.teamId] + 1

    return teamCounts
  }, {})
}
// 3) Lineups may not contain more than 3 players from a single game
const getGameCount = (lineup) => {
  return lineup.reduce((gameCounts, player) => {
    gameCounts[player.gameId] = gameCounts[player.gameId] === undefined ? 1 : gameCounts[player.gameId] + 1

    return gameCounts
  }, {})
}
// 4) Lineups must contain exactly 3 players with the position of 'OF' 
// and must also contain exactly 1 player from each of the following 
// positions: 'P', 'C', '1B', '2B', '3B', 'SS'


const validateLineup = () => {

}

module.exports = validateLineup
