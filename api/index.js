import fetch from '../utils/fetch'

export const getStandings = async () => {
  const { data, statusCode } = await fetch('/prod/v1/current/standings_all.json')
  return {
    data,
    status: statusCode
  }
}

export const getGamesByDate = async (date) => {
  const { data, statusCode } = await fetch(`/data/10s/prod/v1/${date}/scoreboard.json`)
  return {
    data,
    status: statusCode
  }
}

export const getGameDetails = async (date, gameId) => {
  const { data, statusCode } = await fetch(`/data/10s/prod/v1/${date}/${gameId}_boxscore.json`)
  return {
    data,
    status: statusCode
  }
}
