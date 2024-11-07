import React, { useEffect, useRef, useState } from "react";
import instance from "../../axios";
import requests from "../../requests";
import "./banner.scss"
import tools from "../../services/tools/tools";
import Spinner from "../Spinner/Spinner";
 
const base_imgUrl = "https://image.tmdb.org/t/p/original";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const bannerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
        // requests[2] => Top Rated
      const response = await instance.get(requests[2].url);
      let arr = response.data.results;
      let randomMovie = arr[Math.floor(Math.random() * arr.length)];
      setMovie(randomMovie);
      setIsLoading(false);
      return response;
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (bannerRef.current && movie.backdrop_path) {
      bannerRef.current.style.backgroundSize = "cover";
      bannerRef.current.style.backgroundPosition = "center";
      bannerRef.current.style.backgroundImage = `url(${base_imgUrl}/${movie.backdrop_path})`;
    }
  }, [movie]);

  if(isLoading) return <Spinner/>
  else
  return (
    <header ref={bannerRef} className="banner">
      <div className="banner__contents">
       
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner__btns">
          <button 
          
          className="banner__btns_btn"
          >Play</button>
          <button className="banner__btns_btn">My List</button>
        </div>

        <h1 className="banner__description">
            { tools.truncate(movie?.overview, 250) }
        </h1>
    
      </div>

      <div className="banner__fadeBottom">
     
    </div>

    </header>
  );
};
export default Banner;