function MovieCard({ movie }) {
  console.log(movie)
  return (
    <div className="max-w-xs rounded-xl overflow-hidden bg-gray-800 text-white">
      <img
        src={movie['#IMG_POSTER']}
        alt={movie.TITLE}
        width={movie.photo_width}
        height={movie.photo_height}
        className="w-full h-80 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{movie['#TITLE']}</h2>
        <p className="text-sm text-gray-300">{movie.YEAR}</p>

        <p className="mt-2 text-sm">
          <span className="font-semibold">Actors: </span>
          {movie.ACTORS}
        </p>

        <a
          href={movie.IMDB_URL}
          target="_blank"
          className="inline-block mt-3 px-4 py-2 bg-red-600 rounded-lg text-sm hover:bg-red-700"
        >
          View on IMDB
        </a>
      </div>
    </div>
  );
}

export default MovieCard
