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
const getPositionCount = (lineup) => {
  return lineup.reduce((positionCounts, player) => {
    positionCounts[player.position] = positionCounts[player.position] === undefined ? 1 
      : positionCounts[player.position] + 1

    return positionCounts
  }, {})
}
const violatesSalary = (lineup) => {
  return calculateTotalSalary(lineup) > 45000
}
const violatesTeamCount = (teamCounts) => {
  return Object.values(teamCounts).some((count) => { return count > 2 })
}
const violatesGameCount = (gameCounts) => {
  return Object.values(gameCounts).some((count) => { return count > 3 })
}
const violatesPositionCounts = (positionCounts) => {
  return positionCounts['P'] !== 1 || positionCounts['C'] !== 1 ||
  positionCounts['1B'] !== 1 || positionCounts['2B'] !== 1 ||
  positionCounts['3B'] !== 1 || positionCounts['SS'] !== 1 ||
  positionCounts['OF'] !== 3
}

const validateLineup = () => {

}

module.exports = validateLineup
