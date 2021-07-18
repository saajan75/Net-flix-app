import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = `https://image.tmdb.org/t/p/original`;
const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    
    //A snippet of the code which runs based on a specific condition
    useEffect(() => {
        // If [], runs once, then the code loads and don't run again
        async function fetchData(){
            const requests = await axios.get(fetchUrl);
           setMovies(requests.data.results);
           return requests;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {

            autoplay: 1,
        
        },
    };
    const handleClick = (movie) => {
            if(trailerUrl){
                setTrailerUrl("");
            }else{
                movieTrailer(movie?.name || "").then((url) =>{
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch(() => console.log("Trailer Unavaulable"));
            }
    }
     
    return (
        <div className = "row">
            <h3> {title} </h3>

            <div className = "row_posters">
            {movies.map((movie) => (
             <img 
             key = {movie.id}
             onClick = {() => handleClick(movie)}
             className = "row_poster"
             src = {`${base_url}${movie.poster_path}`} alt = {movie.name}/> 
))}
</div>

               {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts} />}
            </div>
        
    );
}

export default Row;
