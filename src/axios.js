import axios from "axios";

const apiCreateFunc = () => {
    return axios.create({
      baseURL: 'https://api.themoviedb.org/3',  
    });
}

const instance  = apiCreateFunc();

export default instance;