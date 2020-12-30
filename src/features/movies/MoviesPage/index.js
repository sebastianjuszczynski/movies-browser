import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomNavigation from "../../BottomNavigation";
import MovieTile from "../../MovieTile";
import Loading from "../../../common/Loading";
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
            {isLoading ? <Loading/> : (
                <>
                    <MoviesContainer>
                        {popularMovies.map(movie =>
                            <MovieTile key={movie.id} movieInfo={movie}>{movie.title}</MovieTile>)}

                    </MoviesContainer>
                    <BottomNavigation />
                </>
            )
            }
        </>
    );
};

export default MoviesPage;