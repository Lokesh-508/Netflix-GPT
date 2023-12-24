import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6 z-40 ">
      <h1 className="text-lg md:text-3xl font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-none scrollbar-hide">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
       </div>
      </div>
    </div>
  );
};
export default MovieList;