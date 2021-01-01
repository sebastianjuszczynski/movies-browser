import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movieData: [],
        loading: false,
        movieId: undefined,
    },
    reducers: {
        fetchMovieSuccess: (state, { payload: movieData }) => {
            state.movieData = movieData;
            state.loading = false;
        },
        fetchMovieError: state => {
            state.loading = false;
        },
        setMovie: (state, { payload: id }) => {
            state.movieId = id;
            state.loading = true;
        },
    },
});

export const {
    fetchMovieSuccess,
    fetchMovieError,
    setMovie,
} = movieSlice.actions;
export const selectMovieData = state => state.movie.movieData;
export const selectLoading = state => state.movie.loading;


export default movieSlice.reducer;