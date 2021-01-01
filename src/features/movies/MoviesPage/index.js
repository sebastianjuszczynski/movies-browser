import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomNavigation from "../../BottomNavigation";
import MovieTile from "../../MovieTile";
import Loading from "../../../common/Loading";
import { MoviesContainer } from "./styled";
import {
    setActivePage,
    selectPopularMovies,
    selectLoading,
} from "./moviesSlice";
import Header from "../../../common/Header/Header";
import { usePageParameter } from "../../pageParameters";

const MoviesPage = () => {
    const urlPageNumber = +usePageParameter("page");
    const popularMovies = useSelector(selectPopularMovies);
    const isLoading = useSelector(selectLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActivePage(urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber))
    }, [urlPageNumber]);

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