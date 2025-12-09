import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

function Browser() {
    useNowPlayingMovies()

    return (
        <div>
            <Header />
        </div>)
}

export default Browser