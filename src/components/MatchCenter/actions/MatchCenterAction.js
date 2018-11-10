import { footballApi } from '../footbalApiToken'

export function fetchPLData() {
  return {
    type: 'FETCH_PL_DATA',
    async payload()  {
      const myHeaders = new Headers()
      myHeaders.append('X-Auth-Token', footballApi)
      await fetch('https://api.football-data.org/v2/matches')
    },
  }
}
