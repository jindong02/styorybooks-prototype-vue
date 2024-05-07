import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    movie: {
      Title: '',
      imdbRating: 0,
      Genre: '',
      Year: 1970,
      Runtime: '',
      Plot: ''
    },
    totalResult: 0,
    currentpage: 1,
    byRelease: 0,
    byRating: 0,
    byTitle: 0,
    byGengre: 0,
    message: 'No movie data',
    keyword: '',
    imdbid: ''
  },
  getters: {
    products: state => {
      return state.products
    },
    keyword: state => {
      return state.keyword
    },
    movie: state => {
      return state.movie
    }
  },
  mutations: {
    setResource (state, payload) {
      state.products = payload.Search
      state.totalResult = payload.totalResults
    },
    setSortType (state, value) {
      if (value === 0) {
        state.byRelease = 0
        state.byRating = 1
      } else {
        state.byRelease = 1
        state.byRating = 0
      }
    },
    setSearchType (state, value) {
      if (value === 0) {
        state.byGengre = 0
        state.byTitle = 1
      } else {
        state.byGengre = 1
        state.byTitle = 0
      }
    },
    setKeyword (state, value) {
      state.keyword = value
    },
    setMessage (state, value) {
      if (value === 'Incorrect IMDb ID.') {
        state.message = 'No movie data'
      } else {
        state.message = value
      }
    },
    setImdbid (state, value) {
      state.imdbid = value
    },
    setCurrentMovie (state, value) {
      state.movie = value
    }
  },
  actions: {
    async getVideosByTitle ({ commit }) {
      commit('setResource', [])
      if (this.state.keyword === '') {
        commit('setMessage', 'No movie data')
        return
      }
      try {
        const url = process.env.VUE_APP_REQUEST_URL + '/?apikey=' + process.env.VUE_APP_APIKEY + '&plot=full&s=' + this.state.keyword + '&page=' + this.state.currentpage
        const response = await fetch(url)
        const result = await response.json()
        if (result.Response === 'True') {
          commit('setResource', result)
        } else {
          commit('setResource', [])
          commit('setMessage', result.Error)
        }
      } catch (error) {
        commit('setResource', [])
        console.log(error)
      }
    },
    async setMovie ({ commit }) {
      const url = process.env.VUE_APP_REQUEST_URL + '/?apikey=' + process.env.VUE_APP_APIKEY + '&i=' + this.state.imdbid
      const response = await fetch(url)
      commit('setCurrentMovie', await response.json())
    }
  },
  modules: {
  }
})
