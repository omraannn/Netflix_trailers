import React, { useEffect, useState } from "react";
import instance from "../../axios";
import "./row.scss";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Spinner from "../Spinner/Spinner";
 
const base_imgUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeLow }) {
   
const [movies, setMovies] = useState([]);
const [trailerUrl, setTrailerUrl] = useState("");
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    async function fetchData() {
      const response = await instance.get(fetchUrl);
      setMovies(response.data.results);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return response;
    }
    fetchData();
}, [fetchUrl]);

// console.log(movies);

const opts = {
    height: "390",
    width: "100%",
    playerVars: {
        autoplay: 1
    }
}
const handleClick = (movie) => {
    if (trailerUrl) {
        setTrailerUrl('');
    } else {
        movieTrailer( movie?.title || movie?.name || movie?.original_name , {id: true, multi: true})
        .then( arrId => {  
            if(arrId != null) {
                // console.log( arrId[Math.floor(Math.random() * arrId.length)] ) 
                setTrailerUrl(arrId[Math.floor(Math.random() * arrId.length)])
            } else {
                setTrailerUrl("2U76x2fD_tE");
            }
        }) 
    }
}
  if(isLoading) return <Spinner/>
  else
  return (
    <div className="row">
      <h2> {title} </h2>

      <div className="row_posters">
        {movies &&
          movies.map((item, index) => (
            <img
              onClick={() => handleClick(item)}
              className={`row_poster ${isLargeLow && "row__posterLarge"}`}
              key={index}
              src={`${base_imgUrl}${
                isLargeLow ? item.poster_path : item.backdrop_path
              }`}
              alt={item.name}
            />
          ))}
      </div>

    {
        trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} /> 
    }
    </div>
  );
}

export default Row;