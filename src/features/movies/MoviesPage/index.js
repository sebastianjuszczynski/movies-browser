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
import Header from "../../../common/Header/Header";

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
            <Header>Popular movies</Header>
            
            {isLoading ? <Loading /> : (
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