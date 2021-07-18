import React, { useState, useEffect } from 'react';
import axios from './axios';
import request from './request';
import './Banner.css';

const Banner = () => {
    const [movie, setMovie] = useState([]);

useEffect(() => {
    async function fetchData(){
        const requests = await axios.get(request.fetchTrendingMovies);
         
        setMovie(
            requests.data.results[
                Math.floor(Math.random() * requests.data.results.length-1)
            ]
        );
        return requests;
    }
    fetchData(); 
}, []);
console.log(movie);

function truncate(str, n){
    return str?.length> n? str.substr(0, n-1) + "...":str; 
}
    return (
    <header className = "banner"
        style = {{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
        }}
    >  
    {/* background image */}
    <div className = "banner_contents">
    {/* title */}
    <h1 className = "banner_title">
        {movie?.title || movie?.original_name || movie?.name}
    </h1>
        {/* div = 2 buttons */}
        <div className = "banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>
         {/* description */}
         <h1 className = "banner_description">
             {truncate(movie?.overview, 150)}
         </h1>
        </div>
          <div className ="banner_fadeBottom" />
    </header>
    )
}

export default Banner;
