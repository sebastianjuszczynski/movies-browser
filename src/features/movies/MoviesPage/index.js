import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomNavigation from "../../BottomNavigation";
import MovieTile from "../../../common/tiles/MovieTile";
import Loading from "../../../common/Loading";
import { TileContainer } from "./../../../common/tiles/TileContainer";
import {
    setActivePage,
    selectList,
    selectLoading,
    setActivePath,
} from "../../listSlice";
import Header from "../../../common/Header/Header";
import { usePageParameter } from "../../pageParameters";

const MoviesPage = () => {
    const urlPageNumber = +usePageParameter("page");
    const popularMovies = useSelector(selectList);
    const isLoading = useSelector(selectLoading);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setActivePath("popularMovies"));
    }, []);

    useEffect(() => {
        dispatch(setActivePage(urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber))
    }, [urlPageNumber]);

    return (
        <>
            <Header>Popular movies</Header>
            
            {isLoading ? <Loading /> : (
                <>
                    <TileContainer>
                        {popularMovies.map(movie =>
                            <MovieTile key={movie.id} movieInfo={movie}>{movie.title}</MovieTile>)}

                    </TileContainer>
                    <BottomNavigation />
                </>
            )
            }
        </>
    );
};

export default MoviesPage;