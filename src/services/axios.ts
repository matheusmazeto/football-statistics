import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'x-rapidapi-key': '2b747603f358ff953ba29d2e74d6b196',
    'x-rapidapi-host': 'v3.football.api-sports.io',
  },
})
