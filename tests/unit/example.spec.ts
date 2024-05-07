import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import store from '@/store'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('HomeView.vue', () => {
  it('Expect setMessage(\'Incorrect IMDb ID.\') is No movie data', () => {
    // commit mutation
    store.commit('setMessage', 'Incorrect IMDb ID.')
    // test its effect
    expect(store.state.message).toBe('No movie data')
  })
  it('Expect state.totalResult is 10', () => {
    const payload = {
      Search: [
        {
          Title: 'Hello, My Name Is Doris',
          Year: '2015',
          imdbID: 'tt3766394',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BMTg0NTM3MTI1MF5BMl5BanBnXkFtZTgwMTAzNTAzNzE@._V1_SX300.jpg'
        },
        {
          Title: 'Hello Mini',
          Year: '2019–',
          imdbID: 'tt9454892',
          Type: 'series',
          Poster: 'https://m.media-amazon.com/images/M/MV5BNTFiOTkyNjktZGM1Zi00MDhhLThhYjAtODUwNDVhYzJjOTEwXkEyXkFqcGdeQXVyMTE0Nzg1NjQ2._V1_SX300.jpg'
        },
        {
          Title: 'Hello, Dolly!',
          Year: '1969',
          imdbID: 'tt0064418',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BODJmZmFiNzQtMDJiYS00ZTgzLTljZGMtNjEzNzM4NmEyYjNiXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg'
        },
        {
          Title: 'Hello Ladies',
          Year: '2013–2014',
          imdbID: 'tt2378794',
          Type: 'series',
          Poster: 'https://m.media-amazon.com/images/M/MV5BNjYxMjI3MzY3NF5BMl5BanBnXkFtZTgwMTgyNzg3MDE@._V1_SX300.jpg'
        },
        {
          Title: 'Hello Mary Lou: Prom Night II',
          Year: '1987',
          imdbID: 'tt0093176',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BZGFmZjQ0ZTYtNjNkOC00OTAxLTlmMWMtNThmMWRkMTcyODY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          Title: 'Hello I Must Be Going',
          Year: '2012',
          imdbID: 'tt2063666',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BZDI0MjQ1M2ItMTRiNS00MTE0LTliMGQtODhmZjMwODNlZTI1XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg'
        },
        {
          Title: 'Hello Ladies: The Movie',
          Year: '2014',
          imdbID: 'tt3762944',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ5MjYxMjkwOV5BMl5BanBnXkFtZTgwODE3MjY0MzE@._V1_SX300.jpg'
        },
        {
          Title: 'Hello Ghost',
          Year: '2010',
          imdbID: 'tt1848926',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BYjZlYTBlZWMtNjc4Ni00ZmEyLTk1ZmQtZGI3ZDg4ZmM2OGU3XkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_SX300.jpg'
        },
        {
          Title: 'Hello Charlie',
          Year: '2021',
          imdbID: 'tt14260080',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BNmNjODA5MjgtZDkyMy00ZmExLTk5N2QtYzIzMzNlNGIyZjZiXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_SX300.jpg'
        },
        {
          Title: 'Hello Brother',
          Year: '1999',
          imdbID: 'tt0233856',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BMjk1MDczMGQtY2RkNS00OGVhLWJhNzYtNWMwMzFhNTcyNjczXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'
        }
      ],
      totalResults: 10,
      Response: 'True'
    }
    // commit mutation
    store.commit('setResource', payload)
    // test its effect
    expect(store.state.totalResult).toBe(10)
  })
  it('Expect setResource([]) is No movie data', () => {
    // commit mutation
    store.commit('setResource', [])
    // test its effect
    expect(store.state.message).toBe('No movie data')
  })
  it('Expect setSortType(0) is byRelease = 0 and byRating = 1', () => {
    // commit mutation
    store.commit('setSortType', 0)
    // test its effect
    expect(store.state.byRelease).toBe(0)
    expect(store.state.byRating).toBe(1)
  })
  it('Expect setSortType(1) is byRelease = 1 and byRating = 0', () => {
    // commit mutation
    store.commit('setSortType', 1)
    // test its effect
    expect(store.state.byRelease).toBe(1)
    expect(store.state.byRating).toBe(0)
  })
  it('Expect setSearchType(1) is byTitle = 0 and byGengre = 1', () => {
    // commit mutation
    store.commit('setSearchType', 1)
    // test its effect
    expect(store.state.byTitle).toBe(0)
    expect(store.state.byGengre).toBe(1)
  })
  it('Expect setSearchType(0) is byTitle = 1 and byGengre = 0', () => {
    // commit mutation
    store.commit('setSearchType', 0)
    // test its effect
    expect(store.state.byTitle).toBe(1)
    expect(store.state.byGengre).toBe(0)
  })
  it('Expect setImdbid(\'tt3766394\') is imdbid = tt3766394', () => {
    // commit mutation
    store.commit('setImdbid', 'tt3766394')
    // test its effect
    expect(store.state.imdbid).toBe('tt3766394')
  })
  it('Expect current movie title is \'Hello, My Name Is Doris\'', () => {
    // commit mutation
    store.commit('setCurrentMovie', {
      Title: 'Hello, My Name Is Doris',
      Year: '2015',
      imdbID: 'tt3766394',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTg0NTM3MTI1MF5BMl5BanBnXkFtZTgwMTAzNTAzNzE@._V1_SX300.jpg'
    })
    // test its effect
    expect(store.state.movie.Title).toBe('Hello, My Name Is Doris')
  })
})