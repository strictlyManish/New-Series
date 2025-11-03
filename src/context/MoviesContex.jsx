import { createContext, useState } from "react"

export const MoviesContextdata = createContext(null)

function MoviesContex({ children }) {


  const [movies, setMovies] = useState([{
    "title": "Spiderman the Verse",
    "year": 2019,
    "id": "tt12122034",
    "rank": 31674,
    "actor": "Brandon Glasco, Joshua Gray",
    "aka": "Spiderman the Verse (2019) ",
    "url": "https://imdb.com/title/tt12122034",
    "iv": "https://IMDb.iamidiotareyoutoo.com/title/tt12122034",
    "poster": "https://m.media-amazon.com/images/M/MV5BNDBjNWY3OWYtMjk2ZS00NjA2LWE0NzAtOWQxNzBhNjZlMGYyXkEyXkFqcGc@._V1_.jpg",
    "photo_width": 679,
    "photo_height": 960
  },
  {
    "title": "Spider-Man",
    "year": 2002,
    "id": "tt0145487",
    "rank": 1032,
    "actor": "Tobey Maguire, Kirsten Dunst",
    "aka": "Spider-Man (2002) ",
    "url": "https://imdb.com/title/tt0145487",
    "iv": "https://IMDb.iamidiotareyoutoo.com/title/tt0145487",
    "poster": "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_.jpg",
    "photo_width": 511,
    "photo_height": 755
  },
  {
    "title": "Italian Spiderman",
    "year": 2007,
    "id": "tt2705436",
    "rank": 30942,
    "actor": "David Ashby, Chris Asimos",
    "aka": "Italian Spiderman (2007) ",
    "url": "https://imdb.com/title/tt2705436",
    "iv": "https://IMDb.iamidiotareyoutoo.com/title/tt2705436",
    "poster": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_.jpg",
    "photo_width": 706,
    "photo_height": 1000
  },
  {
    "title": "Spider-Man: Brand New Day",
    "year": 2026,
    "id": "tt22084616",
    "rank": 575,
    "actor": "Mark Ruffalo, Sadie Sink",
    "aka": "Spider-Man: Brand New Day (2026) ",
    "url": "https://imdb.com/title/tt22084616",
    "iv": "https://IMDb.iamidiotareyoutoo.com/title/tt22084616",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTJhZGE3NmYtYTg0Ny00MWUzLWE0MmUtYTZjYTg1ZjVlMWRkXkEyXkFqcGc@._V1_.jpg",
    "photo_width": 960,
    "photo_height": 1200
  },

  {
    "title": "Spider-Man: No Way Home",
    "year": 2021,
    "id": "tt10872600",
    "rank": 822,
    "actor": "Tom Holland, Zendaya",
    "aka": "Spider-Man: No Way Home (2021) ",
    "url": "https://imdb.com/title/tt10872600",
    "iv": "https://IMDb.iamidiotareyoutoo.com/title/tt10872600",
    "poster": "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
    "photo_width": 1400,
    "photo_height": 2100
  },
  ])


  return (
    <MoviesContextdata.Provider value={[movies, setMovies]} >{children}</MoviesContextdata.Provider>
  )
}

export default MoviesContex