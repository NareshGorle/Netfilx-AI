import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";



function useMovieTrailerVideo(movieId) {

    //fetch trailer video && updating the store with trailer data
    const dispatch = useDispatch()
    // const [trailerId, setTeailerId] = useState(null)
    const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
            API_OPTIONS);
        const json = await data.json()
        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]

        // setTeailerId(trailer.key)
        dispatch(addTrailerVideo(trailer))

    };
    useEffect(() => {
        getMovieVideo();
    }, []);
}

export default useMovieTrailerVideo