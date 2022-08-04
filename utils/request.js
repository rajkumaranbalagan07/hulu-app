/** @format */
const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchToprated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: 'Comedy Movies',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: 'Horror Movies',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: 'Romance Movies',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystryMovies: {
    title: 'Mystry Movies',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchScifiMovies: {
    title: 'Scifi Movies',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestrnMovies: {
    title: 'Western Movies',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimationMovies: {
    title: 'Animation Movies',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTv: {
    title: 'Tv Movies',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
