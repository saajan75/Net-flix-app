import React from 'react';
import "./App.css";
import request from './request';
import Row from './Row';
import Banner from "./Banner";
import Nav from "./Nav";
//20c5fcade48d7818e14b6a695860a143
//https://api.themoviedb.org/3/movie/550?api_key=20c5fcade48d7818e14b6a695860a143

function App() {
  return (
    <div className = "App">
{/* Nav Bar */}
  <Nav />

<Banner />

     <Row title = "Netflix Originals" fetchUrl = {request.fetchNetflixOriginals}/>
    <Row title = "Trending Now" fetchUrl = {request.fetchTrendingMovies}/>
    <Row title = "Top Rated" fetchUrl = {request.fetchTopRatedMovies}/>
    <Row title = "Upcoming Movies" fetchUrl = {request.fetchUpcomingMovies}/>
     <Row title = "Popular Movies" fetchUrl = {request.fetchPopularMovies}/>
    <Row title = "Horror Movies" fetchUrl = {request.fetchHorrorMovies}/>
     <Row title = "Action Movies" fetchUrl = {request.fetchActionMovies}/>
     <Row title = "Comedy Movies" fetchUrl = {request.fetchComedyMovies}/>

   
  </div>
  );
}

export default App;
