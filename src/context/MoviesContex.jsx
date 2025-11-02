import { createContext } from "react"

export const MoviesContext = createContext(null)

function MoviesContex({children}) {


  const [movies, setMovies] = useState([{
    "#TITLE": "Spiderman the Verse",
    "#YEAR": 2019,
    "#IMDB_ID": "tt12122034",
    "#RANK": 31674,
    "#ACTORS": "Brandon Glasco, Joshua Gray",
    "#AKA": "Spiderman the Verse (2019) ",
    "#IMDB_URL": "https://imdb.com/title/tt12122034",
    "#IMDB_IV": "https://IMDb.iamidiotareyoutoo.com/title/tt12122034",
    "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BNDBjNWY3OWYtMjk2ZS00NjA2LWE0NzAtOWQxNzBhNjZlMGYyXkEyXkFqcGc@._V1_.jpg",
    "photo_width": 679,
    "photo_height": 960
  },
  {
    "#TITLE": "Spider-Man",
    "#YEAR": 2002,
    "#IMDB_ID": "tt0145487",
    "#RANK": 1032,
    "#ACTORS": "Tobey Maguire, Kirsten Dunst",
    "#AKA": "Spider-Man (2002) ",
    "#IMDB_URL": "https://imdb.com/title/tt0145487",
    "#IMDB_IV": "https://IMDb.iamidiotareyoutoo.com/title/tt0145487",
    "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_.jpg",
    "photo_width": 511,
    "photo_height": 755
  },
  {
    "#TITLE": "Italian Spiderman",
    "#YEAR": 2007,
    "#IMDB_ID": "tt2705436",
    "#RANK": 30942,
    "#ACTORS": "David Ashby, Chris Asimos",
    "#AKA": "Italian Spiderman (2007) ",
    "#IMDB_URL": "https://imdb.com/title/tt2705436",
    "#IMDB_IV": "https://IMDb.iamidiotareyoutoo.com/title/tt2705436",
    "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_.jpg",
    "photo_width": 706,
    "photo_height": 1000
  },
  {
    "#TITLE": "Spider-Man: Brand New Day",
    "#YEAR": 2026,
    "#IMDB_ID": "tt22084616",
    "#RANK": 575,
    "#ACTORS": "Mark Ruffalo, Sadie Sink",
    "#AKA": "Spider-Man: Brand New Day (2026) ",
    "#IMDB_URL": "https://imdb.com/title/tt22084616",
    "#IMDB_IV": "https://IMDb.iamidiotareyoutoo.com/title/tt22084616",
    "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BMTJhZGE3NmYtYTg0Ny00MWUzLWE0MmUtYTZjYTg1ZjVlMWRkXkEyXkFqcGc@._V1_.jpg",
    "photo_width": 960,
    "photo_height": 1200
  },
  {
    "#TITLE": "The Amazing Spider-Man",
    "#YEAR": 2012,
    "#IMDB_ID": "tt0948470",
    "#RANK": 1745,
    "#ACTORS": "Andrew Garfield, Emma Stone",
    "#AKA": "The Amazing Spider-Man (2012) ",
    "#IMDB_URL": "https://imdb.com/title/tt0948470",
    "#IMDB_IV": "https://IMDb.iamidiotareyoutoo.com/title/tt0948470",
    "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg",
    "photo_width": 1381,
    "photo_height": 2048
  },
  {
    "#TITLE": "Spider-Man: No Way Home",
    "#YEAR": 2021,
    "#IMDB_ID": "tt10872600",
    "#RANK": 822,
    "#ACTORS": "Tom Holland, Zendaya",
    "#AKA": "Spider-Man: No Way Home (2021) ",
    "#IMDB_URL": "https://imdb.com/title/tt10872600",
    "#IMDB_IV": "https://IMDb.iamidiotareyoutoo.com/title/tt10872600",
    "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
    "photo_width": 1400,
    "photo_height": 2100
  },
  {
    "#TITLE": "Spider-Man: Across the Spider-Verse",
    "#YEAR": 2023,
    "#IMDB_ID": "tt9362722",
    "#RANK": 808,
    "#ACTORS": "Shameik Moore, Hailee Steinfeld",
    "#AKA": "Spider-Man: Across the Spider-Verse (2023) ",
    "#IMDB_URL": "https://imdb.com/title/tt9362722",
    "#IMDB_IV": "https://IMDb.iamidiotareyoutoo.com/title/tt9362722",
    "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_.jpg",
    "photo_width": 1299,
    "photo_height": 1929
  },
  {
    "#TITLE": "The Amazing Spider-Man 2",
    "#YEAR": 2014,
    "#IMDB_ID": "tt1872181",
    "#RANK": 2267,
    "#ACTORS": "Andrew Garfield, Emma Stone",
    "#AKA": "The Amazing Spider-Man 2 (2014) ",
    "#IMDB_URL": "https://imdb.com/title/tt1872181",
    "#IMDB_IV": "https://IMDb.iamidiotareyoutoo.com/title/tt1872181",
    "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_.jpg",
    "photo_width": 2025,
    "photo_height": 3000
  }])


  return (
    <MoviesContext.Provider value={movies} >{children}</MoviesContext.Provider>
  )
}

export default MoviesContex