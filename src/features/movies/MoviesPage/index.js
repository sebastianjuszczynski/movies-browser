import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomNavigation from "../../BottomNavigation";
import MovieTile from "../../../common/tiles/MovieTile";
import Loading from "../../../common/Loading";
import { MoviesContainer } from "./../../../common/tiles/TileContainer";
import {
    setActivePage,
    selectList,
    selectLoading,
    setActivePath,
    resetState,
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
        return () => {
            dispatch(resetState());
        };
    }, []);

    useEffect(() => {
        dispatch(setActivePage(urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber))
    }, [urlPageNumber]);

    return (
        <>
            <Header>Popular movies</Header>

            {isLoading ? <Loading /> : (
                <>
                    <MoviesContainer>
                        {popularMovies.map(({ id, poster_path, title, release_date, vote_average, vote_count, credit_id }) => <MovieTile key={id}
                            key={credit_id}
                            poster_path={poster_path}
                            title={title}
                            release_date={release_date}
                            vote_average={vote_average}
                            vote_count={vote_count}>
                        </MovieTile>
                        )}

                    </MoviesContainer>
                    <BottomNavigation />
                </>
            )
            }
        </>
    );
};

export default MoviesPage;