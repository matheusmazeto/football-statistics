import { acceptHMRUpdate, defineStore } from 'pinia'
import { $fetch } from 'ohmyfetch'

interface CountryProps {
  name: string
  flag: string
  code: string
}

export const useCountriesStore = defineStore('countries', {
  state: () => ({
    countries: [],
  }),
  getters: {
    getCountries(state) {
      return state.countries
    },
  },
  actions: {
    async fetchCountries() {
      try {
        const headers = {
          'x-rapidapi-key': '2b747603f358ff953ba29d2e74d6b196',
          'x-rapidapi-host': 'v3.football.api-sports.io',
        }

        const { response } = await $fetch('https://v3.football.api-sports.io/countries', {
          headers,
        })
        this.countries = response
      }
      catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCountriesStore, import.meta.hot))
