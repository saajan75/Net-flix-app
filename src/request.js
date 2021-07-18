const API_KEY = "20c5fcade48d7818e14b6a695860a143";

const request = {
    fetchTrendingMovies: `/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`

}
export default request;