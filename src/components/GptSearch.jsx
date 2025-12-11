import GptMovieSuggustions from "./GptMovieSuggustions"
import GptSearchBar from "./GptSearchBar"
import { BACKGROUND } from "../utils/constants";


function GptSearch() {
    return (
        <div>
            <div className="absolute -z-10">
                <img className="bg-cover w-full"
                    src={BACKGROUND}
                    alt="bg-img" />
            </div>
            <GptSearchBar />
            <GptMovieSuggustions />
        </div>
    )
}

export default GptSearch