import { useSelector } from "react-redux"
import MovieList from "./MovieList"


function SecondaryContainer() {

    const movies = useSelector((store) => store?.movies)

    return (
        movies.nowPlayingMovies && (
            <div className=" bg-black">
                <div className="-mt-52 z-20 relative pl-12">
                    <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Trending"} movies={movies.trendingMovies} />
                    <MovieList title={"Popular"} movies={movies.popularMovies} />
                    <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
                </div>


            </div>)
    )
}

export default SecondaryContainer