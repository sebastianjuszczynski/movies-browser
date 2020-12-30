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
    const urlPageNumber = usePageParameter("page");
    useEffect(() => {
        dispatch(setActivePage(+urlPageNumber || 1))
    }, []);
    const popularMovies = useSelector(selectPopularMovies);
    const isLoading = useSelector(selectLoading);
    const dispatch = useDispatch();

 

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