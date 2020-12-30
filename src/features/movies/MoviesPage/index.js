import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomNavigation from "../../BottomNavigation";
import MovieTile from "../../MovieTile";
import { MoviesContainer } from "./styled";
import {
    fetchPopularMovies,
    selectPopularMovies,
    selectLoading,
    selectActivePage,
} from "./moviesSlice";

const MoviesPage = () => {
    const popularMovies = useSelector(selectPopularMovies);
    const isLoading = useSelector(selectLoading);
    const activePage = useSelector(selectActivePage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [activePage])

    return (
        <>
            {isLoading ? "loading" : (
                <MoviesContainer>
                    {popularMovies.map(movie =>
                        <MovieTile key={movie.id}>{movie.title}</MovieTile>)}
                    <BottomNavigation />
                </MoviesContainer>
            )
            }
        </>
    );
};

export default MoviesPage;