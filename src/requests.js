const API_KEY = "a75646e2a465e8a8bbcfff04499bad79";

const requests = [
  {
    title: "NETFLIX ORIGINALS",
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  {
    title: "Trending Now",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "Action Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    title: "Kids Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    title: "Horror Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    title: "Documentaries Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  {
    title: "Comedy Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  },
  {
    title: "Thriller",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  },
  {
    title: "Science Fiction",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  {
    title: "Series Animation",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  },
  {
    title: "Series Action & Adventure",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  },
  {
    title: "Series Crime",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  },
  {
    title: "Series Family",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
  },
  {
    title: "Series Reality",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,
  },
  {
    title: "Series Sci-Fi & Fantasy",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  },
];

export default requests;
