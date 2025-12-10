import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "Movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        trendingMovies: null,
        upComingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addPopularMovies, addTrendingMovies, addUpComingMovies, addTrailerVideo } = moviesSlice.actions
export default moviesSlice.reducer 