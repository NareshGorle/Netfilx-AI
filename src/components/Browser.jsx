import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainter from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpComingMovies";

function Browser() {
    useNowPlayingMovies()
    usePopularMovies();
    useTrendingMovies();
    useUpcomingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainter />
        </div>)
}

export default Browser